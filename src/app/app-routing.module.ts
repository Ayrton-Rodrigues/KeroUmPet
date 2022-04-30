import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';
import { DetailsPetComponent } from './features/pet/pages/details-pet/details-pet.component';
import { PagePetComponent } from './features/pet/pages/page-pet/page-pet.component';
import { UserListComponent } from './features/user/components/user-list/user-list.component';
import { PetPageComponent } from './features/user/pages/pet-page/pet-page.component';
import { UserPageComponent } from './features/user/pages/user-page/user-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', loadChildren: () =>
    import('./features/home/home.module').then((r) => r.HomeModule)
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'pets', component: PagePetComponent,
  },
  {
    path: 'register', component: RegisterComponent
  },

  { 
    path: 'user/:id', component: UserPageComponent
  },
  { 
    path: 'user/:id/:idPet', component: PetPageComponent
  },
  { 
    path: 'pets/:ownerId/:petId', component: DetailsPetComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
