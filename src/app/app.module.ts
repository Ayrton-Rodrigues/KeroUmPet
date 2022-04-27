import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { PetModule } from './features/pet/pet.module';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './features/user/user/user.component';
import { UserPageComponent } from './features/user/user-page/user-page.component';
import { UserCardComponent } from './features/user/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserPageComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PetModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
