import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from '../../../services/user.service';


@Component({
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  constructor(private userService: UserService) { }

  

  ngOnInit(): void {

  }

}
