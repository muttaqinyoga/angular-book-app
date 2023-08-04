import {  Component, OnInit } from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    ::ng-deep .heading-tree > .mat-expansion-indicator:after {
      color: rgba(179, 179, 179, 0.87);
    }
  `,
  ],
})
export class AppComponent  implements OnInit {
  
  constructor(private observer: BreakpointObserver, public authService: AuthService, private router: Router){}

  title = 'My App';
  sideNavMode: MatDrawerMode
  sideNavOpen: boolean;
  ngOnInit(): void {
      
      this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
        if (res.matches) {
          this.sideNavMode = "over";
          this.sideNavOpen = false;
        } else{
          this.sideNavMode = "side";
          this.sideNavOpen = true;
        }
      });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
