import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Authentication } from '../../../services/authentication/authentication';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  fullName: string = '';
  phone: string = '';
  email: string = '';
  nic: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  constructor(
    private authService: Authentication,
    private router: Router
  ) {}

  register(): void {

    // Validate required fields
    if (
      !this.fullName ||
      !this.phone ||
      !this.email ||
      !this.nic ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate password match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Validate Terms & Conditions
    if (!this.acceptTerms) {
      alert('Please accept the Terms & Conditions.');
      return;
    }

    // Create register payload matching backend RegisterRequest
    const registerData = {
      name: this.fullName,
      email: this.email,
      password: this.password
    };

    console.log('Register payload', registerData);

    // Register User
    this.authService.register(registerData).subscribe({
      next: () => {
        alert('Registration Successful!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);

        const message = error?.error?.message || error?.message || 'Registration failed. Please try again.';
        const status = error?.status;

        if (status === 0) {
          alert('Unable to connect to backend. Make sure the API server is running at http://localhost:8080.');
        } else {
          alert(`Registration failed: ${message}`);
        }
      }
    });

  }

}