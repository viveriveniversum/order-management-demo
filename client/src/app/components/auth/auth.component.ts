import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  loading = false;
  emailSent = false;
  error = '';

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AuthComponent>
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    // Check if already authenticated
    if (this.supabase.isAuthenticated()) {
      this.closeDialog();
    }
  }

  get email() {
    return this.signInForm.get('email');
  }

  async onSubmit(): Promise<void> {
    if (this.signInForm.invalid) {
      return;
    }

    try {
      this.loading = true;
      this.error = '';
      const email = this.signInForm.value.email as string;

      const { error } = await this.supabase.signIn(email);

      if (error) throw error;

      this.emailSent = true;
    } catch (error) {
      if (error instanceof Error) {
        this.error = error.message;
      } else {
        this.error = 'An unexpected error occurred';
      }
      console.error('Auth error:', error);
    } finally {
      this.loading = false;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
