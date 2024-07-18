import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTradeInitiation } from '../Models/AddTradeTransaction.model';
import { getCustomerrequirementlineitems } from '../Models/getCustomerrequirementlineitems.model';
import { AddTradeInitiationDetails } from '../Models/AddTradeInitationdetail.model';
import { getTradeInitiationDetailsa } from '../Models/getTradeInitationDetails.model';
import { EditTradeInitiation } from '../Models/EditTradeInitiation.model';
import { EditTradeInitiationDetails } from '../Models/EditTradeInitationDetails.model';
import { ListNotification } from '../../NotificationList/model/notificationlist.model';
import { gettradeinitiationlineitems } from '../Models/gettradeinitiationlineitems.model';

@Injectable({
  providedIn: 'root'
})
export class TradeinitiationService {

  constructor(private http:HttpClient) { 
  }
  getLastTradeInitiationRefNo(): Observable<number> {
    return this.http.get<number>('https://localhost:7124/api/TransactionInitiation/GetLastTransactionInitiationNo');
  }


  getLastTradetransactionRefNo(): Observable<number> {
    return this.http.get<number>('https://localhost:7124/api/TradeTransaction/GetLasttradeTransactionreferenceno');
  }



  getcustomeridfromcustomername(customername :string): Observable<string> {
   
//alert("zxczxczx"+customername);
    return this.http.get<string >(`https://localhost:7124/api/TransactionInitiation/GetCustomeridfromcustomername?customername=${customername}`);
  }


  createTradeInitationheader(data: AddTradeInitiation) : Observable<AddTradeInitiation> {

    console.log('Trade Data:', data);
    return this.http.post<AddTradeInitiation>('https://localhost:7124/api/TransactionInitiation/CreatetradeInitation', data);
  }


getcustomerrequirementlineitemdetails(crid :string):Observable<getCustomerrequirementlineitems[]>{
return this.http.get<getCustomerrequirementlineitems[] >(`https://localhost:7124/api/CustomerRequirement/GetcustomerRequirementlineitems?crid=${crid}`);
}


gettradeinitiationlineitems(tiid:string):Observable<gettradeinitiationlineitems[]>{


  return this.http.get<gettradeinitiationlineitems[]>(`https://localhost:7124/api/TransactionInitiation/GetTransactionInitiationLineitems?tiid=${tiid}`)
}











createtradeinitiationdetails(data: AddTradeInitiationDetails) : Observable<AddTradeInitiationDetails> {
  return this.http.post<AddTradeInitiationDetails>('https://localhost:7124/api/TransactionInitiation/CreatetradeInitationDetails?addAuth=True', data);
}


gettradeInitiationList():Observable<getTradeInitiationDetailsa[]>{


  return this.http.get<getTradeInitiationDetailsa[]>('https://localhost:7124/api/TransactionInitiation/GetTradeInitationDetails')
}

gettradeinitiationlistnotapproved():Observable<getTradeInitiationDetailsa[]>{


  return this.http.get<getTradeInitiationDetailsa[]>('https://localhost:7124/api/TransactionInitiation/GetTradeInitationDetailstobeapproved')
}



getNotificationList(userid :string):Observable<ListNotification[]>{

return this.http.get<ListNotification[]>(`https://localhost:7124/api/CustomerRequirement/ListNotificationsforRole?userid=${userid}`);

}













getTradeInitiationById(id: number): Observable<EditTradeInitiation> {
  return this.http.get<EditTradeInitiation>(`https://localhost:7124/api/TransactionInitiation/GetTradeInitationbyInitiationid?id=${id}`);
}



getTradeInitiationdetailsById(id: number): Observable<EditTradeInitiationDetails[]> {
  return this.http.get<EditTradeInitiationDetails[]>(`https://localhost:7124/api/TransactionInitiation/GetTradeInitationdetailsbyInitiationid?id=${id}`);
}


}
