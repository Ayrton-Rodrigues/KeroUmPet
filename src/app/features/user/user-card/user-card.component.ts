import { Component, OnInit, Input } from '@angular/core';
import { PetModel } from '../../models/pet.model';
import { UserModel } from '../../models/user.model';
import { PetCardComponent } from '../../pet/components/pet-card/pet-card.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  @Input() user?: UserModel



  ngOnInit(): void {  

}

getId(event: any){
  const user = this.user
  
  console.log(user?.pet.forEach((pet) => console.log(pet)))
}

}