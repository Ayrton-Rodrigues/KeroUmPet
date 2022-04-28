import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { PetModule } from '../pet/pet.module';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    HttpClientModule,
    PetModule,
    HomeRoutingModule
    
  ]
})
export class HomeModule { }
