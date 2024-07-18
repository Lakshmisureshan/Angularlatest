import { Component, HostListener, OnInit } from '@angular/core';
import { NewrequirementService } from '../../new-requirement/services/newrequirement.service';
import { PopupComponent } from 'src/app/Components/Core/popup/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/Models/user.mode';
import { DashboardService } from '../services/dashboard.service';
import { switchMap } from 'rxjs';
import { Notifications } from '../Model/notification.model';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { TradeinitiationService } from '../../TradeInitiation/services/tradeinitiation.service';
import { Popupcom1Component } from 'src/app/Components/Core/popupcom1/popupcom1.component';
@Component({
  selector: 'app-financedashboard',
  templateUrl: './financedashboard.component.html',
  styleUrls: ['./financedashboard.component.css']
})
export class FinancedashboardComponent implements OnInit {
  user?:User;
  gridApi: any;  gridApi2: any;
  notificationCount: number = 0;
  userid ?:string;
  email?:string;
transactionnotdone?: number;
  popupVisible: boolean = false;
 userid1?:string;
  popupTop: string = '0px';
  popupLeft: string = '0px';

  noti: Notifications[] = [];

  onButtonClick1(rowData1: any): void {
alert(rowData1.tInitationID);

const dialogRef = this.dialog.open(Popupcom1Component, {
  width: '400px',
  height:'300px',
  data: { message: rowData1.tInitationID, uid: this.userid} // Pass any data to the popup if needed
});

dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  // Handle any actions after the popup is closed
});






  }




   togglePopup() {
  
    this.popupVisible = !this.popupVisible;
    this.user = this.authservice.getUser();
    console.log(this.user);
   this.email =this.user?.email
 
   if (this.email) {
    this.authservice.getUserID(this.email).subscribe({

    next: (response) => {
    this.userid = response;
         alert(this.userid );

         this.dashservice.createnotificationseen(this.userid)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/categories');
      }
    });


    }



  });

 }
 
    

























   
  }
 

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    // Check if the click event target is the notification icon/button
    const isNotificationIcon = target.matches('.notification-container') || target.closest('.notification-container');
    if (!isNotificationIcon) {
      // Toggle the popup if the notification icon/button is clicked
      this.popupVisible =false;
      return;
    }

    // Check if the click event target is outside the popup
  
  }

  


  constructor(private newcustomrerequirementservice: NewrequirementService, private dialog: MatDialog, private authservice:AuthService, private dashservice:DashboardService, private router:Router,private transactionservice:TradeinitiationService) { }
  ngOnInit(): void {

     this.transactionservice.gettradeinitiationlistnotapproved().subscribe({
      next: (response) => {
        console.log(response);
        this.rowData1 = response;

        console.log(this.rowData1 );
        this.gridApi2.setRowData(this.rowData1);
      },
      error: (err) => {
        console.error('Error fetching trade initiation list', err);
      }
    });
    















    this.user = this.authservice.getUser();
   console.log(this.user);
this.email =this.user?.email

if (this.email) {
  this.authservice.getUserID(this.email).pipe(
    switchMap((response) => {
      this.userid = response;
      console.log('UserID:', this.userid); // Log the user ID
      // After getting the userid, make the next API call
      return this.dashservice.getNotificationcount(this.userid);
    })
  ).subscribe({
    next: (notificationCount) => {
      this.notificationCount = Number(notificationCount);
      console.log('Notification Count:', this.notificationCount); // Log the notification count
      // Fetch notifications
      this.fetchNotifications();
    },
    error: (error) => {
      console.error('Error fetching notification count:', error); // Log the error
    }
  });
}



if (this.email) {
  this.authservice.getUserID(this.email).pipe().subscribe({


    next: (response) => {
      this.userid = response;


    }
  });




  

  
}























    this.newcustomrerequirementservice.getNewcustomerRequirementtobeauthorizedbyfinancemanager().subscribe({
      next: (response) => {
        console.log(JSON.stringify(response));
        this.rowData = response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }




  columnDefs1=[
    { headerName: 'TIID', field: 'tInitationID', cellRenderer: 'linkRenderer' },
      { headerName: 'customer Name', field: 'customername' },
      { headerName: 'Date', field: 'tInitationDate' },

      { headerName: 'Customer Payment Method', field: 'cpaymentmethodname' },
      {
        headerName: 'Actions',
        cellRenderer: (params: any) => {
          const button = document.createElement('button');
          button.innerText = 'Approve';
          button.style.backgroundColor = 'red';
          button.style.width = '100px';
          button.style.height = '40px';
          button.addEventListener('click', () => this.onButtonClick1(params.data));
          return button;
        }
      }


  ]






  columnDefs = [
    { headerName: 'CRID', field: 'crid', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Customer', field: 'customername', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Division', field: 'divisionname', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Status', field: 'statusname', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Approved/Rejected', field: 'approvedrejectedstatusname', sortable: true, filter: true, floatingFilter: true },
    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Approve';
        button.style.backgroundColor = 'aliceblue';
        button.style.width = '100px';
        button.style.height = '40px';
        button.addEventListener('click', () => this.onButtonClick(params.data));
        return button;
      }
    }
  ];

  rowData: any[] = [];
  rowData1: any[] = [];
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
  onGridReady1(params: any): void {
    this.gridApi2 = params.api;
  }

  onButtonClick(rowData: any): void {
    //alert(`CRID: ${rowData.crid}`);
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { message: rowData.crid, uid: this.userid} // Pass any data to the popup if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the popup is closed
    });




  }


  fetchNotifications(): void {
    if (this.userid) {

   //alert(this.userid);

   this.dashservice.getNotifications(this.userid).subscribe({

      
    next: (response) => {
 
    this.noti = response;
      console.log(this.noti);
    },
    error: (error) => {
      console.error('Error fetching notifications:', error);
    }
  });













    }
  }


  
}