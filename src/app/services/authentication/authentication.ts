import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Authentication {


  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(
    private http: HttpClient
  ) {}



  // ==========================
  // LOGIN
  // ==========================

  login(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );

  }



  // ==========================
  // REGISTER
  // ==========================

  register(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register`,
      data
    );

  }



  // ==========================
  // SAVE JWT TOKEN
  // ==========================

  saveToken(token: any): void {

    if (!token) {
      return;
    }

    // Accept either a string token or common response shapes
    let value = typeof token === 'string' ? token : (token?.token ?? token?.accessToken ?? token?.jwt ?? token?.data?.token ?? '');

    // Strip accidental Bearer prefix if present
    if (value.startsWith('Bearer ')) {
      value = value.substring(7);
    }

    if (value) {
      localStorage.setItem('token', value);
    }

  }



  // ==========================
  // GET TOKEN
  // ==========================

  getToken(): string | null {

    return localStorage.getItem(
      'token'
    );

  }



  // ==========================
  // LOGOUT
  // ==========================

  logout(): void {

    localStorage.removeItem(
      'token'
    );

    localStorage.removeItem(
      'role'
    );

  }



  // ==========================
  // SAVE ROLE
  // ==========================

  saveRole(role: string): void {

    localStorage.setItem(
      'role',
      role
    );

  }



  // ==========================
  // GET ROLE
  // ==========================

  getRole(): string | null {

    return localStorage.getItem(
      'role'
    );

  }



  // ==========================
  // CHECK LOGIN
  // ==========================

  isLoggedIn(): boolean {

    return this.getToken() !== null;

  }

}