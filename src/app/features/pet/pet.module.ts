import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import { DetailsPetComponent } from './pages/details-pet/details-pet.component';
import { PagePetComponent } from './pages/page-pet/page-pet.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PetCardComponent,
    PetListComponent,
    CreatePetComponent,
    DetailsPetComponent,
    PagePetComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PetModule { }
