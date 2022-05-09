import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() pet!: PetModel;

  id?: number;
  idPet!: number;

  ngOnInit(): void {
    this.idPet = this.pet.id;
    this.id = this.pet.ownerId;
  }

  navigateDetails() {
    this.router.navigateByUrl(`pets/${this.id}/${this.idPet}`);
  }
}
