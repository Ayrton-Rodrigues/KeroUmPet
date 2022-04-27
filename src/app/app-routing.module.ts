import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';
import { CreatePetComponent } from './features/pet/pages/create-pet/create-pet.component';
import { PageHomeComponent } from './features/pet/pages/page-home/page-home.component';
import { PagePetComponent } from './features/pet/pages/page-pet/page-pet.component';
import { UserPageComponent } from './features/user/user-page/user-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'pets', component: PagePetComponent},
  {path:'home', component: PageHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
