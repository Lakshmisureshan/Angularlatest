import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieservice:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //return next.handle(request);
    if (this.shouldInterceptRequest(request))
      {
const authrequest =request.clone({
setHeaders:{

'Authorization':this.cookieservice.get('Authorization')

}

});


return next.handle (authrequest);
      }

      else{

        return next.handle(request);
      }
}

private shouldInterceptRequest (request :HttpRequest<any>):boolean{

return request.urlWithParams.indexOf('addAuth=True',0)>-1? true:false;

}
}
