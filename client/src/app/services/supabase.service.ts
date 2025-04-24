import { Injectable, NgZone } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Profile {
  id?: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.loadSession();

    this.authChanges((event, session) => {
      console.log(`Supabase auth event: ${event}`);
      if (session) {
        this._session = session;
        this.userSubject.next(session.user);
      } else {
        this._session = null;
        this.userSubject.next(null);
      }
    });

    // Listen for auth changes in other tabs/windows
    window.addEventListener('storage', (event) => {
      // Check if the storage event is related to supabase auth
      if (event.key?.includes('supabase.auth')) {
        console.log('Auth storage event detected in another tab');
        this.ngZone.run(() => {
          this.loadSession();
        });
      }
    });
  }

  private async loadSession() {
    try {
      const { data } = await this.supabase.auth.getSession();
      this._session = data.session;
      if (data.session) {
        this.userSubject.next(data.session.user);
      } else {
        this.userSubject.next(null);
      }
    } catch (error) {
      console.error('Error loading session:', error);
      this._session = null;
      this.userSubject.next(null);
    }
  }

  get session() {
    return this._session;
  }

  isAuthenticated(): boolean {
    return !!this._session;
  }

  getUserEmail(): string | null {
    return this._session?.user?.email || null;
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.supabase.auth.signInWithOtp({
      email,
      options: {
        // This will help ensure browser tabs are correctly redirected
        emailRedirectTo: window.location.origin,
      },
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  // Manually refresh the session
  public refreshSession() {
    return this.loadSession();
  }
}
