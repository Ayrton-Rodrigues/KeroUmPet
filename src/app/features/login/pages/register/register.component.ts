import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService,
              private router: Router) {}



  user: UserModel = this.userService.getModelUser();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cnpj: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  createUser(){

    const userValue = this.userForm.value
 
      this.user.name = userValue.name
      this.user.email = userValue.email
      this.user.cnpj = userValue.cnpj
      this.user.district = userValue.district
      this.user.password = userValue.password
      if(this.user)
      this.userService.createUser(this.user).subscribe((result) => alert(`${this.user.name} adicionado com sucesso`)) 
       console.log(this.user)
  }
}
