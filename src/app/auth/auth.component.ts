import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent   {

constructor(public authService: AuthService, public router: Router) {
  if(authService.isLoggedIn){
    this.router.navigate(['/']);
  }
}
  
  

  hide = true;
  fail = false;
  submited = false;
  login(username:string, password:string){
    this.submited = true;
    this.authService.login(username, password).subscribe(() => {
      if(this.authService.isLoggedIn){
        this.router.navigate(['/']);
      } else {
        this.fail = true;
        this.submited = false;
      }
    })
  }

  logout(){
    this.authService.logout();
  }

  
}
