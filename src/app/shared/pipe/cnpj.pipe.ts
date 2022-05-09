import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: string): string {
    const cnpj = value.split('')

    return `${cnpj[0]}${cnpj[1]}.${cnpj[2]}${cnpj[3]}${cnpj[4]}.${cnpj[5]}${cnpj[6]}${cnpj[7]}/${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}-${cnpj[12]}${cnpj[13]}`;
  }

}
