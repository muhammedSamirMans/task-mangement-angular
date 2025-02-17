import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Define the custom headers
    var headers = req.headers
      .set('Content-Type', 'application/json')       // Set Content-Type header
      .set('Accept', 'application/json');    
      if (typeof window !== 'undefined' && window.localStorage) {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
          headers = headers.set('Authorization', `Bearer ${authToken}`);
        }
      } else {
        console.error('localStorage is not available');
      }
              // Set Accept header
    const clonedRequest = req.clone({ headers });

    return next.handle(clonedRequest);  // Proceed with the request
  }
}
