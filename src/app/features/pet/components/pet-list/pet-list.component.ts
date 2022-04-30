import { Component, OnInit } from '@angular/core';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  constructor(private petService: PetService) { }


  pets!: PetModel[];

  ngOnInit(): void {
this.petService.getAllPets().subscribe((pets) => {
  this.pets = pets
})
  }
  }


