import { HeroeComponent } from './components/heroe/heroe.component';
import { Heroe } from './servicios/heroes.services';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
