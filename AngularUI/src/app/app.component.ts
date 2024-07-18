import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'TradingUI';
  sidebarOpen1=true;


  toggletoolBar(){

    this.sidebarOpen1 =this.sidebarOpen1? false:true;

  }

  
  userForm= new FormGroup({

    name: new FormControl('',Validators.required),
    country :new  FormControl('',Validators.required),
    phoneNo :new  FormControl('',Validators.required),
    emailID :new  FormControl('',Validators.required),
    });
    
}
