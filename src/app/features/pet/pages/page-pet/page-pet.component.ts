
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';


@Component({
  templateUrl: './page-pet.component.html',
  styleUrls: ['./page-pet.component.scss'],
})
export class PagePetComponent implements OnInit {
  constructor(private userService: UserService) {}


  user: Array<UserModel> = []


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.user = users
    });
  }



}