import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupserviceService {

  constructor(private http:HttpClient) { }


  approveTransactionInitiation(id: string, userid :string ): Observable<string> {
    return this.http.post<string>(`https://localhost:7124/api/Approve/ApproveTransactionInitiation?id=${id}&userid=${userid}`, {});
  }

}
