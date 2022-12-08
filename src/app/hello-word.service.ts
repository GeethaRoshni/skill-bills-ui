import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {
  constructor(private http: HttpClient) { }

  helloWorldService(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/api/test/user');
  }
}
