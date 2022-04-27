import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import { DetailsPetComponent } from './pages/details-pet/details-pet.component';
import { PagePetComponent } from './pages/page-pet/page-pet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PetCardComponent,
    PetListComponent,
    CreatePetComponent,
    DetailsPetComponent,
    PagePetComponent,
    PageHomeComponent,
  
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
 
  ]
})
export class PetModule { }