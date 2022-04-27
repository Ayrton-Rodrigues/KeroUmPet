import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: Array<UserModel> = []
  users!: UserModel
  
  
  ngOnInit(): void {
  this.userService.getAllUsers().subscribe((users) => {
    this.user = users
  
  })
  }

  getByIndex(){
    console.log(this.user.findIndex((user) => user))
    let i = 0;
    for(let i = 0; i < this.user.length; i++ ){
        this.users = this.user[i]
    }


  }
}
