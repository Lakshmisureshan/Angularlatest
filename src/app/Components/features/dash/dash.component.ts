import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopupComponent } from 'src/app/Components/Core/popup/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { NewrequirementService } from '../new-requirement/services/newrequirement.service';
import { DashboardService } from '../financedashboard/services/dashboard.service';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../auth/Models/user.mode';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { TradeinitiationService } from '../TradeInitiation/services/tradeinitiation.service';
import { Router } from '@angular/router';
import { Popupcom1Component } from '../../Core/popupcom1/popupcom1.component';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent  implements OnInit{
  newrequirement?: number;
  tradeinitiation?:number;
  private breakpointObserver = inject(BreakpointObserver);
  rowData: any[] = [];
  rowData1: any[] = [];
  gridApi: any;
  user?:User;
  userid: any;
  email?:string;
  notificationCount: number = 5; // Example notification count
  gridApi2: any;
  onGridReady1(params: any): void {
    this.gridApi2 = params.api;
  }
  openNotifications(): void {
    // Logic to open notification panel or redirect to notification page
    console.log('Notifications button clicked');
    this.router.navigate(['/NofificationList']);
  }
  





  onGridReady(params: any): void {
    this.gridApi = params.api;
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
  columnDefs = [
    { headerName: 'CRID', field: 'crid', sortable: true, filter: true, floatingFilter: false },
    { headerName: 'Customer', field: 'customername', sortable: true, filter: true, floatingFilter: false },
    { headerName: 'Division', field: 'divisionname', sortable: true, filter: true, floatingFilter: false },
    { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: false },
    { headerName: 'Status', field: 'statusname', sortable: true, filter: true, floatingFilter: false },
    { headerName: 'Approved/Rejected', field: 'approvedrejectedstatusname', sortable: true, filter: true, floatingFilter: false },
    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
       // button.innerText = 'Approve';
       const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.height = '100%'; // Ensure the container takes the full height of the cell

  // Create button

  // Set button styles
  button.style.backgroundColor = '#82E0AA';
  button.style.width = '100px';
  button.style.height = '30px';
  button.style.borderColor = '#82E0AA';
  button.style.color = 'white'; // Optional: set text color for better visibility
  button.style.border = 'none'; // Optional: remove default border
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.padding = '0'; // Ensure no extra padding is added
  button.style.borderRadius = '5px'; // Add border radius

  // Create icon element
  const icon = document.createElement('i');
  icon.className = 'fas fa-check'; // Font Awesome check icon
  icon.style.marginRight = '5px'; // Add margin between icon and text

  // Create text element
  const text = document.createElement('span');
  text.innerText = 'Approve';

  // Append icon and text to button
  button.appendChild(icon);
  button.appendChild(text);

  // Add event listener
  button.addEventListener('click', () => this.onButtonClick(params.data));

  // Append button to container
  container.appendChild(button);

  return container;
      }
    }
  ];

  onButtonClick1(rowData1: any): void {
    alert(rowData1.tInitationID);
       


   //alert(`CRID: ${rowData.crid}`);
   const dialogRef = this.dialog.open(Popupcom1Component, {
    width: '250px',
    data: { message: rowData1.tInitationID, uid: this.userid} // Pass any data to the popup if needed
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // Handle any actions after the popup is closed
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
          // button.innerText = 'Approve';
          const container = document.createElement('div');
     container.style.display = 'flex';
     container.style.justifyContent = 'center';
     container.style.alignItems = 'center';
     container.style.height = '100%'; // Ensure the container takes the full height of the cell
   
     // Create button
   
     // Set button styles
     button.style.backgroundColor = '#82E0AA';
     button.style.width = '100px';
     button.style.height = '30px';
     button.style.borderColor = '#82E0AA';
     button.style.color = 'white'; // Optional: set text color for better visibility
     button.style.border = 'none'; // Optional: remove default border
     button.style.display = 'flex';
     button.style.alignItems = 'center';
     button.style.justifyContent = 'center';
     button.style.padding = '0'; // Ensure no extra padding is added
     button.style.borderRadius = '5px'; // Add border radius
   
     // Create icon element
     const icon = document.createElement('i');
     icon.className = 'fas fa-check'; // Font Awesome check icon
     icon.style.marginRight = '5px'; // Add margin between icon and text
   
     // Create text element
     const text = document.createElement('span');
     text.innerText = 'Approve';
   
     // Append icon and text to button
     button.appendChild(icon);
     button.appendChild(text);
   
          button.addEventListener('click', () => this.onButtonClick1(params.data));
          return button;
        }
      }


  ]

















  /** Based on the screen size, switch from standard to one column per row */
  cardLayout: Observable<{ 
    columns: number, 
    miniCard: { cols: number, rows: number },
     chart: { cols: number, rows: number }, 
     table: { cols: number, rows: number } }> = of({
    columns: 4,
    miniCard: { cols: 1, rows: 1 },
    chart: { cols: 2, rows: 3},
    table: { cols: 4, rows: 4 },
  });

  constructor(private dialog: MatDialog,private newcustomrerequirementservice: NewrequirementService, private dashservice:DashboardService, private authservice:AuthService, private transactionservice :TradeinitiationService,  private router: Router) {
    this.cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
      
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 1 },
            table: { cols: 1, rows: 4 },
          };
        }
   
       return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 2, rows: 3 },
          table: { cols: 4, rows: 4 },
        };
      })
    );
   
  }
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
  this.authservice.getUserID(this.email).pipe().subscribe({


    next: (response) => {
      this.userid = response;

      this.newcustomrerequirementservice.countNotificationsForRole(this.userid).subscribe(
        count => {
          this.notificationCount = count;
        },
        error => {
          console.error('Error fetching notification count', error);
        }
      );

    }
  });











}

this.user = this.authservice.getUser();
console.log(this.user);
this.email =this.user?.email







    
    this.dashservice.getNewCustomerRequirement().pipe().subscribe({


      next: (response) => {
        this.newrequirement = Number(response);
        //alert(this.transactionnotdone);
  
      }
    });

this.dashservice.getTradeInitiationcount().pipe().subscribe({

  next: (response) => {
    this.tradeinitiation = Number(response);
    //alert(this.transactionnotdone);

  }

});








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
  }
