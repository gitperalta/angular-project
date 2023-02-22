import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  logIn(email: string, password: string): Observable<any> {
    let body = {
      email,
      password,
    };
    // Return the Observable's response when the http query is completed, the subscribed component gets the login token
    return this.http.post('https://reqres.in/api/login', body);
  }
}
