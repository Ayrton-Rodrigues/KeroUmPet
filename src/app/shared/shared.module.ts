import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PetModule } from '../features/pet/pet.module';
import { LoginModule } from '../features/login/login.module';
import { CnpjPipe } from './pipe/cnpj.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CnpjPipe
  ],
  imports: [
    CommonModule,
    
   
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
