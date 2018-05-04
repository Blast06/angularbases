import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.route";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { FormsModule } from "@angular/forms";
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
