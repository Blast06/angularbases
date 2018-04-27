import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent {
    mostrar_frase:boolean = false;

    frase:any = {
        mensaje: "Un gran poder requiere una gran responsabilidad",
        autor: "Ben Parker",
    }

    personajes:string[] = ["Iron man","Thor", "Black Panther", "Ant Man"];


}
