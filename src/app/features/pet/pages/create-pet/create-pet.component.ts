import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) { }

  user!: UserModel
  ngOnInit(): void {
    this.petService.getAllPets().subscribe((pet) => {
      this.pets = pet
    })

    

    const userReal = localStorage.getItem('user')
    if(userReal){
      this.user = JSON.parse(userReal)
      console.log(this.user)
    }
    
  }
  modelPet: PetModel = this.petService.getModelPet(); 

  petForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  pets!: Array<PetModel>  

  createPet() {
    const petForm = this.petForm.value;
    const pet = this.modelPet;
  
    pet.id = this.pets[this.pets.length - 1].id + 1;
    pet.ownerId = this.user.id
    pet.name = petForm.name;
    pet.description = petForm.description;
    pet.age = petForm.age;

    this.petService.createPet(pet).subscribe((result) => {
      alert(`pet adicionado!`);
    });
    console.log(pet);
    this.router.navigateByUrl(`/user/${this.user.id}`)
  }
}
