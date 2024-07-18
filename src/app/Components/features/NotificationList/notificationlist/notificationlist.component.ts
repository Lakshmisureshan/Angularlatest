import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/Models/user.mode';
import { AuthService } from '../../auth/services/auth.service';
import { TradeinitiationService } from '../../TradeInitiation/services/tradeinitiation.service';

@Component({
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.component.html',
  styleUrls: ['./notificationlist.component.css']
})
export class NotificationlistComponent implements OnInit {


  constructor(private authservice:AuthService,private transactionservice :TradeinitiationService)
  {



  }
  ngOnInit(): void {
 
this.user =this.authservice.getUser();
this.email =this.user?.email
if (this.email) {
this.authservice.getUserID(this.email).pipe().subscribe({
next:(response)=>{
this.userid = response;
this.transactionservice.getNotificationList(this.userid).subscribe({
  next: (response) => {

 console.log (response);
 //console.log('Notifications from service:', response.map(n => ({ id: n.id, description: n.description, docID: n.docID })));
this.rowData =response;
this.gridApi.setRowData(this.rowData);
  }

})
}
})

}


  }
  user?:User;
  userid: any;
  email?:string;
  rowData: any[] = [];
  gridApi: any;
  onGridReady(params: any): void {
  this.gridApi = params.api;
  }
columnDefs = [
{headerName:'ID',field: 'id'},

{headerName:'Date',field: 'createddate'},
{headerName:'Description',field: 'description'},
  ];
}
