import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
 
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
    fullName = '';
    phone = '';
    email = '';
    nic = '';
    password = '';
    confirmPassword = '';
  router: any;
  acceptTerms: boolean = false;


    register() {

  if (
    !this.fullName ||
    !this.phone ||
    !this.email ||
    !this.nic ||
    !this.password ||
    !this.confirmPassword
  ) {
    alert('Please fill all fields.');
    return;
  }

  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const user = {
    fullName: this.fullName,
    phone: this.phone,
    email: this.email,
    nic: this.nic,
    password: this.password,
    role: 'customer'
  };

  localStorage.setItem('user', JSON.stringify(user));

  alert('Registration Successful!');

  this.router.navigate(['/login']);

}

}
