import { PetModel } from "./pet.model";

export interface UserModel{
  id?: number,
  name: string,
  email: string,
  cnpj: number,
  district: string,
  password: string,
  pet: Array<PetModel>
}