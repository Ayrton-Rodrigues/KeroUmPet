import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.scss']
})
export class DetailsPetComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private userService: UserService) { }

  id!: number;
  idPet!: number;
  pet!: PetModel;
  user!: UserModel;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['ownerId']
    })

    this.route.params.subscribe((params) => {
      this.idPet = params['petId']
    })

    this.petService.getPet(this.id, this.idPet).subscribe((pet) => {
      this.pet = pet
    })

    this.userService.getUser(this.id).subscribe((user) => {
      this.user = user
    })
  }

  }


