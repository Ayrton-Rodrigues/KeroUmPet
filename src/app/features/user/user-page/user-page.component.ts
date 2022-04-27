import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(
              private userService: UserService,
              private activateRoute: ActivatedRoute          
              ) { }

     users?: UserModel[]
  
    
  ngOnInit(): void {
     this.userService.getAllUsers().subscribe((user) => {
       this.users = user
     })
     

    

  }



}