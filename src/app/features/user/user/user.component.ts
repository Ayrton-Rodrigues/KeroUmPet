import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  users: Array<UserModel> = [];
 
  
  getId(id: number){     
    return this.users.find((user) => user.id === id)
  }

  ngOnInit(): void {
  this.userService.getAllUsers().subscribe((user) => {this.users = user})

}




}