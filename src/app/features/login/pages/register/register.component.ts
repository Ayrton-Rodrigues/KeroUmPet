import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/features/models/user.model';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  modelUser(): UserModel{
    return {
      
      name: '',
      email: '',
      cnpj: 0,
      district: '',
      password: '',
    }
  }

  user: UserModel = this.modelUser()

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
   
     console.log(this.user)
  }
}
