import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideclave'
})
export class HideclavePipe implements PipeTransform {

  transform(value: string, activar: boolean = true) {

    let patron = value;
    let digitos = "*";


    if (activar) {
      let claveEscondida = value.replace(patron, digitos.repeat(value.length));
      return claveEscondida;
    }
    else {
      return value;
    }

  }

}
