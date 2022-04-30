import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.scss']
})
export class PetPageComponent implements OnInit {

  constructor(  private userService: UserService,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router  ) { }

    id!: number;
    idPet!: number;
    pet!: PetModel
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params['id']
    })

    this.route.params.subscribe((params) => {
      this.idPet = params['idPet']
    })

    this.petService.getPet(this.id, this.idPet).subscribe((pet) => {
      this.pet = pet
    })
  }






  show(){
    console.log(this.id, this.idPet)
    console.log(this.pet)
  }



}
