import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError  } from 'rxjs';
import { Notifications } from '../Model/notification.model';
import { AddNotificationSeen } from '../Model/Addnotificationseen.model';
import { NotificationSeen } from '../Model/notificationseen.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://localhost:7124/api/Notification/GetNotificationtoTradeManager'; 


  private apiurl2 ='https://localhost:7124/api';



  getNotifications(userid: string): Observable<Notifications[]> {
   // alert('mm');
    return this.http.get<Notifications[]>(`${this.apiurl2}/Notification/GetNoti?userid=${userid}`);
  }
  createnotificationseen(userid: string) : Observable<string > {
    alert(userid);
    return this.http.get<string >(`https://localhost:7124/api/AddNotification/createNotificationSeen?userid=${userid}`);
  }
 



  gettransactionInitiationnotdone(): Observable<string> {
    //alert(userid);
    return this.http.get('https://localhost:7124/api/Notification/GetAllApprovedCustomerRequirementTInotdone', { responseType: 'text' }).pipe(
      map((response: any) => {
        try {
          //alert(response);
          return response; // If the response is already a plain text UUID, return it directly
        } catch (error) {
          console.error('Parsing error:', error);
          throw error;
        }
      }),
      catchError(this.handleError) // Handle any errors
    );
  }



  getNewCustomerRequirement(): Observable<string> {
    //alert(userid);
    return this.http.get('https://localhost:7124/api/Notification/GetallNewCustomerRequiremen', { responseType: 'text' }).pipe(
      map((response: any) => {
        try {
         // alert(response);
          return response; // If the response is already a plain text UUID, return it directly
        } catch (error) {
          console.error('Parsing error:', error);
          throw error;
        }
      }),
      catchError(this.handleError) // Handle any errors
    );
  }


























  getNotificationcount(userid: string | undefined): Observable<string> {

    //alert(userid);
    return this.http.get(this.apiUrl + `?userid=${userid}`, { responseType: 'text' }).pipe(
      map((response: any) => {
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
}
