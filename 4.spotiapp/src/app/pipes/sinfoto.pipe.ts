import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let noimage = 'assets/img/noimage.png';
    
    if (!imagenes) {
      return noimage;
      
    }
    
    return (imagenes.length > 0)? imagenes[1].url : noimage;

  }

}

//NOTA, ESTE PIPE ES PARA VER SI TIENEN IMAGENES O NO, EN CASO DE NO TENER, MANDO UN IMAGEPLACEHOLDER PARA LOS QUE 
//NO TIENEN.
