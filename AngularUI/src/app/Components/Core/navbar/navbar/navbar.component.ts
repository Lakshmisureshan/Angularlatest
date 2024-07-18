import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Components/features/auth/Models/user.mode';
import { AuthService } from 'src/app/Components/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
user?:User;
  constructor(private authservice:AuthService, private router:Router)
  {


  }
ngOnInit(): void {
this.authservice.user().subscribe({
next:(response)=>{
console.log(response);
this.user=response;
}

});

 this.user = this.authservice.getUser();
    
  }

 onLogOut():void
 {
this.authservice.logout();
this.router.navigateByUrl('/');
  }

}
