import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetModel } from '../models/pet.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  options = {
    headers: {
      'Content-Type': 'aplication/json',
    },
  };

  getModelPet(){
    return {
      ownerId: 0,   
      id: 0,      
      name: '',
      description: '', 
      age: 0,  
      img: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg',
    }
  }


  getAllPets() {
    return this.http.get<Array<PetModel>>(
      environment.BackEndPetsPet,
      this.options
    );
  }

  getPetsOwner(id: number) {
    return this.http.get<Array<PetModel>>(`${environment.BackEndPetsPet}/${id}`, this.options);
  }

  getPet(id: number, idPet: number) {
    return this.http.get<PetModel>(`${environment.BackEndPetsPet}/${id}/${idPet}`, this.options);
  }

  createPet(pet: PetModel){
    return this.http.post(environment.BackEndPetsPet, pet, {responseType: 'text'})
  }


  
  deletePet(id: number, idPet: number){
    return this.http.delete(`${environment.BackEndPetsPet}/${id}/${idPet}`, this.options);
  }



}
