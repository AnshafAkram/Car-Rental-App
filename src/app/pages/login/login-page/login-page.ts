import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authentication } from '../../../services/authentication/authentication';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage {

  email: string = '';

  password: string = '';

  constructor(
    private authentication: Authentication,
    private router: Router
  ) {}

  login(): void {

    // Validation
    if (!this.email || !this.password) {
      alert('Please enter email and password.');
      return;
    }

    const loginData = {
      email: this.email.trim().toLowerCase(),
      password: this.password.trim()
    };

    // Call Spring Boot API
    this.authentication.login(loginData).subscribe({
      next: (response) => {
        console.log('Login response', response);

        const token = response?.token
          ?? response?.accessToken
          ?? response?.jwt
          ?? response?.data?.token;

        if (!token) {
          console.error('Login response missing token', response);
          alert('Login succeeded but server did not return a token.');
          return;
        }

        // Save JWT token
        this.authentication.saveToken(token);

        // Save role (handle different shapes)
        const role = response?.role ?? (Array.isArray(response?.roles) ? response.roles[0] : null);
        if (role) {
          this.authentication.saveRole(role);
        }

        // Redirect based on role
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/dashboard']);
        }

      },
      error: (error) => {
        console.log('Login error', error);

        const message = error?.error?.message || error?.message || 'Invalid email or password.';
        const status = error?.status;

        if (status === 0) {
          alert('Unable to connect to backend. Make sure the API server is running at http://localhost:8080.');
        } else {
          alert(`Login failed: ${message}`);
        }
      }
    });

  }
}
