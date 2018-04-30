import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';

import { capitalizadoPipe } from "./pipes/capitalizado.pipe";
 
//para cambiar fecha a espanol, se importan estos, tambien el LOCALE_ID que esta arriba
// despues se agrega al provider lo que se ve ahi, y listo!
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HideclavePipe } from './pipes/hideclave.pipe';
registerLocaleData(localeEs);
 
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent,capitalizadoPipe, DomseguroPipe, HideclavePipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }