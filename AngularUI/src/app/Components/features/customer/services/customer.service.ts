import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.model';
import { AddCustomer } from '../Models/addcustomer.model';
import { UpdateCustomer } from '../Models/updatecustomer.model';
import { CookieService } from 'ngx-cookie-service';
import { Supplier } from '../Models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private cookieservice :CookieService) { }


getallCustomers() :Observable<Customer[]>
{
 
return this.http.get<Customer[]>('https://localhost:7124/api/Customer');

}



getallsuppliers() :Observable<Supplier[]>
{
 
return this.http.get<Supplier[]>('https://localhost:7124/api/Supplier');

}











createcustomer(data: AddCustomer) : Observable<Customer> {
  return this.http.post<Customer>('https://localhost:7124/api/Customer', data);
}



getCategoryById (id :string) :Observable<Customer>{

  return this.http.get<Customer>(`https://localhost:7124/api/Customer/GetcustomerById/${id}`);

}



updatecustomer(id:string, updatecustomer:UpdateCustomer):Observable<Customer>{
  return this.http.put<Customer>(`https://localhost:7124/api/Customer/${id}`,updatecustomer
  ,{

    //headers:{
     //'Authorization' :this.cookieservice.get('Authorization')
    //}
    }



)


}





}
