import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTradeContact } from '../../model/tradecontract.model';
import { Observable } from 'rxjs/internal/Observable';
import { AddTradeContractDetails } from '../../model/tradecontractdetails.model';
import { getTradeContractDetails } from '../../model/gettradecontactdetails.model';
import { getTradeContractDetailsbyTTID } from '../../model/gettradecontractdetailsbyttid.model';

@Injectable({
  providedIn: 'root'
})
export class TradeContractServicesService {

  constructor(private http:HttpClient) { }

  createTradeContract(data:AddTradeContact):Observable<AddTradeContact>
  {
    //console.log(data );
return this.http.post<AddTradeContact>('https://localhost:7124/api/TradeTransaction/CreateTradeContract', data);


  }



createTradeContractdetails (data:AddTradeContractDetails):Observable<AddTradeContractDetails>
{

return this.http.post<AddTradeContractDetails>('https://localhost:7124/api/TradeTransaction/CreateTradeContractDetails', data);

}


GetTradetransactiondetaildbyTCID(TTID:string):Observable<getTradeContractDetailsbyTTID[]>{
console.log ("jjjjuuu"+TTID);

  return this.http.get<getTradeContractDetailsbyTTID[]>(`https://localhost:7124/api/TradeTransaction/GetTradetransactiondetaildbyTCID?TTID=${TTID}`)
}











getTradeContractDetails()
{

  return this.http.get<getTradeContractDetails[]>('https://localhost:7124/api/TradeTransaction/GetTradeTransactionDetails');
}

}
