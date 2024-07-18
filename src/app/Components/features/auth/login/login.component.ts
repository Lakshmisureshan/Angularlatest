import { Component } from '@angular/core';
import { LoginRequest } from '../Models/login-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: FormGroup;
  model:LoginRequest;
  constructor( private fb: FormBuilder, private authservice:AuthService, private cookieservice:CookieService, private router:Router)
  {


    this.userForm = this.fb.group({
     email: ['', Validators.required],
     password: ['', Validators.required],
       // other form controls
    });



this.model ={
 email :'',
 password: ''
};
  }


  onFormSubmit(){
    this.model.email = this.userForm.value.email;
    this.model.password = this.userForm.value.password;
    console.log(this.model);

    this.authservice.login(this.model).subscribe({

      next :(response)=>{
//alert(response);
console.log(response);
this.cookieservice.set('Authorization', `Bearer ${response.token}`,
  undefined, '/', undefined, true , 'Strict'
);
this.authservice.setUser({
  email:response.email,
  roles:response.roles
})
if (response.roles.includes('TradeManager')) {
console.log(response.roles);
  this.router.navigateByUrl('/finance/dashboard');
} else {
  this.router.navigateByUrl('/');
}
      }
    })
  }


}
