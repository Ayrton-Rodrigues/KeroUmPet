import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { DetailsPetComponent } from './pages/details-pet/details-pet.component';
import { PagePetComponent } from './pages/page-pet/page-pet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageHomeComponent } from '../home/pages/page-home/page-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PetCardComponent,
    PetListComponent,
    DetailsPetComponent,
    PagePetComponent,
    PageHomeComponent,
    CreatePetComponent,
  
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
 
  ]
})
export class PetModule { }
