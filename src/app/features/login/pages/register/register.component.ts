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


  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cnpj: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  ngOnInit(): void {}

  onSubmit(){
    const user = this.userService.getModelUser();
    const userValue = this.userForm.value
 
      user.name = userValue.name
      user.email = userValue.email
      user.cnpj = userValue.cnpj
      user.district = userValue.district
      user.password = userValue.password      
      this.userService.createUser(user).subscribe((result) => alert(`${user.name} adicionado com sucesso`))

      console.log(user)
      this.router.navigateByUrl('login')
  }
}
