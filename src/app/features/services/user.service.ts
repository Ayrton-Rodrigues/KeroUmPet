import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    
  }

  options = { 
    headers: {
    'Content-Type': 'aplication/json'
  }
}


users!: Array<UserModel> 

  getAllUsers(){
  return this.http.get<Array<UserModel>>(environment.backEndPets, this.options)
}

  getLogin(email: string, password: string ){
    return this.users.find((user) => user.email === email && user.password === password)
  }

  getUser(id: number){
  return this.http.get<UserModel>(`${environment.backEndPets}/${id}`, this.options)
  }

  
  

  getByFindId(id: number){
    return this.users.find((user) => user.id === id)
  }

}






















