import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../Models/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }



  


  gteAllDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>('https://localhost:7124/api/Division/GetAllDivisions');
  }

}
