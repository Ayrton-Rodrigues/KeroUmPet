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

  
  ngOnInit(): void {

  }
  }


