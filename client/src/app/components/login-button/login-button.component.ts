import { Component, inject, EventEmitter, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { SupabaseService } from '../../services/supabase.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'login-button',
  template: `<div class="auth-container">
    @if ((supabase.user$ | async) === null) {
    <button mat-raised-button color="primary" (click)="openDialog()">
      <mat-icon>login</mat-icon>
      Login
    </button>
    } @else {
    <div class="user-info">
      <span class="user-email">{{ supabase.getUserEmail() }}</span>
      <button mat-raised-button color="warn" (click)="logout()">
        <mat-icon>logout</mat-icon>
        Logout
      </button>
    </div>
    }
  </div>`,
  standalone: true,
  imports: [MatButtonModule, MatIcon, AsyncPipe],
  styleUrls: ['./login-button.component.css'],
})
export class LoginButton implements OnInit {
  dialog = inject(MatDialog);
  supabase = inject(SupabaseService);

  ngOnInit() {
    // Check for auth parameter in URL (for magic link redirects)
    if (window.location.hash && window.location.hash.includes('access_token')) {
      console.log('Auth redirect detected, refreshing session');
      this.supabase.refreshSession();
    }

    // Listen for focus events on the window to refresh auth state
    // This helps when alinging a tab after authenticating in another tab
    window.addEventListener('focus', () => {
      console.log('Window focused, refreshing auth state');
      this.supabase.refreshSession();
    });
  }

  async openDialog() {
    const dialog = this.dialog.open(AuthComponent, {
      width: '600px',
    });
  }

  logout() {
    this.supabase.signOut().then(() => {
      console.log('Logged out successfully');
    });
  }
}
