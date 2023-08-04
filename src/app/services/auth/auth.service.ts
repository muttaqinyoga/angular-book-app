import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  
  login(username:string, password:string): Observable<boolean>{
    if(username === 'admin' && password === 'password'){
      return of (true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = true)
      );
    }
    return of (false).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = false)
    );
    
  }

  logout(): void{
    this.isLoggedIn = false;
  }
}
