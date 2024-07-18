import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCustomerRequirement } from '../Model/add-customerrequirement.model';
import { CustomerRequirement } from '../Model/customerrequirement.mode';
import { AddCustomerRequirementDetail } from '../Model/add-customerrequirementdetail.model';
import { CustomerRequirementDetail } from '../Model/customerrequirementdetail.model';
import { GetCustomerRequirement } from '../Model/getNewcustomerRequirement.model';
import { NewCustomerRequirementpermonth } from '../Model/Newcustomerrequirementpermonth.model';

@Injectable({
  providedIn: 'root'
})
export class NewrequirementService {

  constructor(private http:HttpClient) { }


  getmaxCustomerrequirementrefno(): Observable<number> {
    return this.http.get<number>('https://localhost:7124/api/CustomerRequirement/GetLastcustomerRequirementreferenceno');
  }

  createcustomerrequirementheader(data: AddCustomerRequirement) : Observable<CustomerRequirement> {
    return this.http.post<CustomerRequirement>('https://localhost:7124/api/CustomerRequirement/CreateCustomerRequirement?addAuth=True', data);
  }
  
  


  createcustomerrequirementDetail(data: AddCustomerRequirementDetail) : Observable<CustomerRequirementDetail> {
    return this.http.post<CustomerRequirementDetail>('https://localhost:7124/api/CustomerRequirement/CreateCustomerRequirementDetail?addAuth=True', data);
  }


getNewcustomerRequirementDetails():Observable<GetCustomerRequirement[]>
{
  return this.http.get<GetCustomerRequirement[]>('https://localhost:7124/api/CustomerRequirement/GetcustomerRequirementdetail?addAuth=True');
}


getNewcustomerrequirementpermonth():Observable<NewCustomerRequirementpermonth[]>
{

return this.http.get<NewCustomerRequirementpermonth[]>('https://localhost:7124/api/CustomerRequirement/GetNewrequirementcountpermonth')


}



getNewcustomerRequirementtobeauthorizedbyfinancemanager():Observable<GetCustomerRequirement[]>
{
  return this.http.get<GetCustomerRequirement[]>('https://localhost:7124/api/CustomerRequirement/GetcustomerRequirementtobeauthorizedbyfinancemanager?addAuth=True');
}



countNotificationsForRole(userId: string): Observable<number> {
  return this.http.get<number>(`https://localhost:7124/api/CustomerRequirement/CountNotificationsForRole?userid=${userId}`).pipe(
    
  );
}










}
