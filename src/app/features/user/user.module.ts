import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';

import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserPetsComponent } from './components/user-pets/user-pets.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';

@NgModule({
  declarations: [
    UserListComponent, 
    UserPageComponent, UserPetsComponent, PetPageComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    HttpClientModule
  ],
  exports: [
    UserListComponent, 
    UserPageComponent
  ],
})
export class UserModule {}
