import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  users: UserModel[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((user) => {
      this.users = user
    });
  }

  error: boolean = false;
  email!: string;
  password!: string;

  user?: UserModel;
  

  loginUser() {
   const user = this.users.find((user) => user.email === this.email && user.password === this.password)
    this.user = user
    if (!user) {
      alert('Usuário não cadastrado');
      this.router.navigateByUrl('login');
    } else {      
      console.log(localStorage.setItem('user', JSON.stringify(user)))
      this.router.navigateByUrl(`user/${user?.id}`);

    }
  }

  navigateByRegister(url: string) {
    this.router.navigateByUrl(url);
  }
}
