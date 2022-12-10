import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './common/login/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    AUTHORIZATION = 'Authorization'
    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem(this.AUTHORIZATION) as string
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}