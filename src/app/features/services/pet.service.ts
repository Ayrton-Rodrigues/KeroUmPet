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
  
  deletePet(id: number, idPet: number){
    return this.http.delete(`${environment.BackEndPetsPet}/${id}/${idPet}`, this.options);
  }



}
