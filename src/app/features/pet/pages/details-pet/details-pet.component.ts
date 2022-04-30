import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { PetService } from 'src/app/features/services/pet.service';

@Component({
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.scss']
})
export class DetailsPetComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private petService: PetService) { }

  id!: number;
  idPet!: number;
  pet!: PetModel;

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
  }

  }


