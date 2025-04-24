import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div class="callback-container">
      <mat-spinner diameter="48"></mat-spinner>
      <p>Processing your login...</p>
    </div>
  `,
  styles: [
    `
      .callback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 16px;
      }
    `,
  ],
})
export class AuthCallbackComponent implements OnInit {
  constructor(private supabase: SupabaseService, private router: Router) {}

  ngOnInit() {
    this.handleAuthRedirect();
  }

  async handleAuthRedirect() {
    try {
      await this.supabase.refreshSession();

      // Session processing may take some time
      setTimeout(() => {
        // Clear hash from URL to avoid confusion due to magic link
        if (window.history && window.history.replaceState) {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }

        this.router.navigate(['/']);

        localStorage.setItem('auth_updated', Date.now().toString());
      }, 1000);
    } catch (error) {
      console.error('Error handling auth redirect:', error);
      this.router.navigate(['/']);
    }
  }
}
