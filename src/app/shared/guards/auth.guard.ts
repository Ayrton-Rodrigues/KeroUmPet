import { Injectable } from '@angular/core';
import {  Router,CanActivate, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean{
    const user = localStorage.getItem('user')
    
    if(user){
    return true;
    }
    this.router.navigateByUrl('/login')
    return false

  }
    


  
  
}
