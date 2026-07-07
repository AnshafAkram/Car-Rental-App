import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-page',
   standalone: true,
  imports: [FormsModule, RouterLink],
 
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (!this.email || !this.password) {
      alert('Please enter email and password.');
      return;
    }

    // Temporary Admin Login
    if (this.email === 'admin@gmail.com' && this.password === '1234') {

      localStorage.setItem('role', 'admin');

      this.router.navigate(['/admin']);

      return;
    }

    // Temporary Customer Login
    if (this.email === 'user@gmail.com' && this.password === '1234') {

      localStorage.setItem('role', 'customer');

      this.router.navigate(['/dashboard']);

      return;
    }

    alert('Invalid email or password.');

  }

}