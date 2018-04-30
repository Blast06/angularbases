import { Component } from '@angular/core';
import { reject } from 'q';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = "Julio";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  percentPipe = 0.245;

  salario = 1235;

  heroe = {
    nombre: "Logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle:"primera",
      casa:"19"
    }
  }

  valorDepromesa = new Promise((resolve, reject) => {
   setTimeout( ()=>resolve('llego la data!'),3500);
  });
  
  fecha = new Date();

  nombre2 = "julio benjamin delgado tapia";

  video = "VGDy7PY0N_o";

  activar: boolean = true;

  
}

