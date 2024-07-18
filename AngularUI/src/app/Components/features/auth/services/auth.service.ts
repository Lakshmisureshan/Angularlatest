import { Injectable } from '@angular/core';
import { LoginRequest } from '../Models/login-request.model';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { LoginResponse } from '../Models/login-response.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../Models/user.mode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User|undefined>(undefined);
  constructor(private http:HttpClient, private cookieservice:CookieService) { }


  private apiUrl = 'https://localhost:7124/api/Auth/GetUserIDFromEmail'; // Base URL for the API

 

  getUserID(email: string | undefined): Observable<string> {
    return this.http.get(this.apiUrl + `?email=${email}`, { responseType: 'text' }).pipe(
      map(response => {
        try {
          return response; // If the response is already a plain text UUID, return it directly
        } catch (error) {
          console.error('Parsing error:', error);
          throw error;
        }
      }),
      catchError(this.handleError) // Handle any errors
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }





login(request:LoginRequest) :Observable<LoginResponse>
{

  return this.http.post<LoginResponse>('https://localhost:7124/api/Auth/login', request);
}

setUser(user:User):void
{
this.$user.next(user);
  localStorage.setItem('user-email', user.email);
  localStorage.setItem('user-roles', user.roles.join (','));
}

 user():Observable<User|undefined>{
  return this.$user.asObservable();
 };

 getUser():User |undefined
 {
const email =localStorage.getItem('user-email');
const roles =localStorage.getItem('user-roles');
if(email && roles )
  {
    const user : User ={
      email:email,
      roles :roles.split(','),
  }
  return user;
  }
return undefined;

 }
 logout():void{
localStorage.clear();
this.cookieservice.delete('Authorization', '/');
this.$user.next(undefined);

 }
}
