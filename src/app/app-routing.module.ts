import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { PagePetComponent } from './features/pet/pages/page-pet/page-pet.component';

const routes: Routes = [
  {path: '', redirectTo: '/pet', pathMatch: 'full'},
  {path: 'pet', component: PagePetComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
