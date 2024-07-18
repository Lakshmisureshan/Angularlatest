import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrapprovalService } from '../services/crapproval.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  isApprovalVisible = true; 
  hh: any;
  kk: any;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef, private approvalservice:CrapprovalService,
    private router: Router,
    
  ) {

this.hh = this.data;

console.log (this.hh);
setTimeout(() => {
  // Manually trigger change detection
  this.cdr.detectChanges();
});
  }

  ngOnInit(): void {
    if (this.data && this.data.message) {
      this.kk = this.hh;
      console.log("zxczxczxcz"+this.hh); // Ensure this logs the correct data
      
      // Delay execution to ensure DOM update
      setTimeout(() => {
        // Manually trigger change detection
        this.cdr.detectChanges();
      });











    }







  }

  closePopup(): void {
    this.dialogRef.close();
  }


  approve(message: string ): void {
    alert(message);
    // You can now use the `message` parameter in the method
    console.log("Message to approve:", message);
    this.approvalservice.approveCustomerRequirement(message, this.data.uid).subscribe(response => {
      console.log('Response from server:', response);
      this.isApprovalVisible = false;
    
      window.location.reload();
      this.cdr.detectChanges();
    }, error => {
      console.error('Error occurred:', error);
    });
  }


  cancel()
  {
    this.isApprovalVisible = false;
    this.cdr.detectChanges();

    console.log(this.isApprovalVisible );
  }







}