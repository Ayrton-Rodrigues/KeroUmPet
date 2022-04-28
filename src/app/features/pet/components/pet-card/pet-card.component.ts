import { Component, OnInit, Input } from '@angular/core';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  constructor() { }

  @Input() listPet!: UserModel

  sum: number = 0

  ngOnInit(): void {
  }



  getByIndex(){
    

  }
}
