import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupserviceService } from './services/popupservice.service';

@Component({
  selector: 'app-popupcom1',
  templateUrl: './popupcom1.component.html',
  styleUrls: ['./popupcom1.component.css']
})
export class Popupcom1Component implements OnInit {
  password: string = '';
  isApprovalVisible = true; 
  kk: any;
  message1: any;
  approve(mes: string ) {
    alert( mes);
    alert(this.data.uid);

    this.popupservice.approveTransactionInitiation(mes, this.data.uid).subscribe(response => {
      console.log('Response from server:', response);
      this.isApprovalVisible = false;
    
      window.location.reload();
      this.cdr.detectChanges();
    }, error => {
      console.error('Error occurred:', error);
    });






    // Add your logic for approving the password
  }

  cancel() {
    this.password = '';
    console.log('Password entry canceled');
    // Add your logic for canceling the password entry
  }
constructor(public dialogRef: MatDialogRef<Popupcom1Component>,@Inject(MAT_DIALOG_DATA) public data: any,private popupservice: PopupserviceService,private cdr: ChangeDetectorRef)
{

  this.kk = this.data;

  console.log (this.kk);
  setTimeout(() => {
    // Manually trigger change detection
    this.cdr.detectChanges();
  });

}
  ngOnInit(): void {

    console.log (this.data.message);
    if (this.data && this.data.message) {

    
      this.message1 = this.kk;
      alert(this.message1);
  }
}





}
