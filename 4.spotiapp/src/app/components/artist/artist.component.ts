import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {}
  tracks: any[] = []

  //NOTA: Con el servicio "ActivatedRoute" puedo leer la url a la que se le da click(me refiero a las que contienen)
  //las imagenes de los resultados de busqueda, para asi poder mostrarlas en el ArtistComponent
  constructor(private activatedRoute: ActivatedRoute, public _spotiFy: SpotifyService) {

  }

  ngOnInit() {
    //Aqui obtengo el id del objeto(el perfil del artista) al hacer click
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        console.log(id);
        this._spotiFy.getArtista(id).subscribe(artista => {
          console.log(artista);
          this.artista = artista;
        })

        this._spotiFy.getTop(id)
        .map((resp:any) => resp.tracks)
          .subscribe(tracks => {
            console.log(tracks);
            this.tracks = tracks;

          });
      });


  }



}
