import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';
import { PagePetComponent } from './features/pet/pages/page-pet/page-pet.component';
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
    path: 'user', component: UserPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
