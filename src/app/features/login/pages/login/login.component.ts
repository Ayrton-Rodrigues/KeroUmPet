import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService
  ) { }

    users: Array<UserModel> = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((user) => {
      this.users = user
    })
  }

  error: boolean = false
  email?: string
  password?: string



  loginUser(){    

  const user = this.users.find((user) => user.email === this.email && user.password === this.password)
   
    if(!user){
      alert("Não existe")
      this.router.navigateByUrl('login')
    } else {
   
        sessionStorage.setItem('user', JSON.stringify(user));  
        this.router.navigateByUrl(`user`);

    }    

      
  }

  navigateByRegister(url: string){
    this.router.navigateByUrl(url)
  }





}
