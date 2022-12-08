import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResponse } from './loginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  AUTHORIZATION = 'Authorization'

  public username: string | null = '';
  public password: string | null = '';

  constructor(private http: HttpClient) {

  }
  

  authenticationService(username: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://localhost:8080/api/auth/signin`,
      {
        username, password
      },
      { headers: {  } }).pipe(map((response) => {
        sessionStorage.setItem(this.AUTHORIZATION, response.tokenType + ' ' + response.accessToken);
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, response.userName);
        return response;
      }));
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.AUTHORIZATION);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.AUTHORIZATION)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
