import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../Model/supplier.model';
import { AddSupplier } from '../Model/addsupplier.model';
import { UpdateSupplier } from '../Model/updatesupplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) {


}


getAllsuppliers() :Observable<Supplier[]>
{
  return this.http.get<Supplier[]>('https://localhost:7124/api/Supplier');
  }

getSupplierById(id :string):Observable<Supplier>
{
  return this.http.get<Supplier>(`https://localhost:7124/api/Supplier/GetSupplierrById/${id}`);
}



createsupplier(data: AddSupplier) : Observable<Supplier> {
  return this.http.post<Supplier>('https://localhost:7124/api/Supplier/Supplier', data);
}

updatesupplier(id:string, updatesupplier:UpdateSupplier):Observable<Supplier>{
  return this.http.put<Supplier>(`https://localhost:7124/api/Supplier/${id}`,updatesupplier)  ;
}


}
