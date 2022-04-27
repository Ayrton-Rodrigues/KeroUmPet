import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  options = { 
    headers: {
    'Content-Type': 'aplication/json'
  }
}


users: Array<UserModel> = [];

getAllUsers(){
  return this.http.get<Array<UserModel>>(environment.backEndPets, this.options)
}

getUser(){
  this.getAllUsers().subscribe((user) => {
    this.users = user
  })
}


getById(id: number){
return this.users.find((user) => user.id === id)

}



















}
