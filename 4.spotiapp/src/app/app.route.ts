import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}, //cualqier ruta que no haga match con las registradas, retorna home
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
