
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private petService: PetService) { 
               }


  users!: UserModel[];
  userId!: string;
  user!: UserModel;
  pets!: PetModel[];
  pet!: PetModel;           


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id']
       });

    this.userService.getUser(parseInt(this.userId)).subscribe((user) => {
      this.user = user
    })    

    this.petService.getPetsOwner(parseInt(this.userId)).subscribe((pets) => {
      this.pets = pets
    })

    



  }


  getById(event: any){
            

    console.log(this.user)
    console.log(this.pets)

  }


}

  
  



