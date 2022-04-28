import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    
  ],
  exports: [
    UserListComponent,
    UserCardComponent,
    UserPageComponent
  ]
})
export class UserModule { }
