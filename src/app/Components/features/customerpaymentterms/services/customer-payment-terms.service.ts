import { Injectable } from '@angular/core';
import { CustomerPaymentTerms } from '../Models/customerpaymentterms.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerPaymentTermsService {

  constructor(private http:HttpClient) { }



  getAllCustomerPaymnetTerms() :Observable<CustomerPaymentTerms[]>
{
 
return this.http.get<CustomerPaymentTerms[]>('https://localhost:7124/api/CustomerPayment/GetallCustomerPaymentMethods');

}
}
