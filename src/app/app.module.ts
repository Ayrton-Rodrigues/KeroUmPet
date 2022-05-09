import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { PetModule } from './features/pet/pet.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './features/user/user.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt); 
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PetModule,
    LoginModule,
    UserModule
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
