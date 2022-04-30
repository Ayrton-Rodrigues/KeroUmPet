import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  selector: 'app-user-pets',
  templateUrl: './user-pets.component.html',
  styleUrls: ['./user-pets.component.scss']
})
export class UserPetsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
    
    ) { }

    @Input()
    pet!: PetModel;  
    userId!: string;
    pets!: PetModel[];
    idPet!: number
    detailsPet!: PetModel


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id']
       });
    
     
  }


  deletePet(){
    this.petService.deletePet(parseInt(this.userId), this.idPet).subscribe();
  }

  getById(){
   this.idPet = this.pet.id
   console.log(this.idPet)
  }

  navigateDetails(){

     this.idPet = this.pet.id

    this.router.navigateByUrl(`user/${parseInt(this.userId)}/${this.idPet}`)
    
  }


}