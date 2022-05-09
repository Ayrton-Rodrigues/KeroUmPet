import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  options = {
    headers: {
      'Content-Type': 'aplication/json',
    },
  };

  users?: Array<UserModel>;
  user?: UserModel;

  getModelUser(): UserModel {
    return {      
      name: '',
      email: '',
      cnpj: '',
      district: '',
      password: '',
    };
  }

  getAllUsers() {
    return this.http.get<Array<UserModel>>(
      environment.backEndPets,
      this.options
    );
  }

  getAll() {
    return this.getAllUsers().subscribe((user) => {
      this.users = user;
    });
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users?.find((user) => {
      user.email === email && user.password === password;
    });
  }

  getUser(id: number) {
    return this.http.get<UserModel>(
      `${environment.backEndPets}/${id}`,
      this.options
    );
  }

  createUser(user: UserModel) {
    return this.http.post(environment.backEndPets, user, {responseType: 'text'});
  }

  updateUser(id: number, user: UserModel){

    return this.http.put(
      `${environment.backEndPets}/${id}`, user, this.options);
  
}

deleteUser(id: number){
  return this.http.delete(
    `${environment.backEndPets}/${id}`, this.options);  
}


  exit() {
    return localStorage.clear();
  }
}
