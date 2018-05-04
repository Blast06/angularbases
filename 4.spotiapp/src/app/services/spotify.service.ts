import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import   "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  tracks:any[] = [];

  urlSpotify: string= 'https://api.spotify.com/v1/';

  //EL TOKEN VENCE CADA HORA!
  token: string = 'BQDerlhFkfLfVeE4qgK1pCXp7rdXsEpcaLzGs19mSSoQe2feTm-Y9UQ8VEkw684ThE3DORiH5ujIEaH74L-9pG8PILOnzm3c_uVDqtpuTLXVYxTKOy9qYZwm6yb97REp-LR2hRnIqFaZ7eJg7XjM9sD_jDd4-Z01HvIK0scwVygEUcgwd0g5Wd-bZr9nQvhGUO8rQZGCeW835XCBjSpgV8rpqSM5_NnDrZJ0MxxuVjr6-b4l5g0Zf8dptKCQn9rG9yGKLRGx';


  constructor(public http: HttpClient) { 
    console.log("servicio listo")
  }

  private getHeaders(): HttpHeaders{
    //recuerdate que este TOKEN VENCE CADA 1 HORA; ES DE SPOTIFY  
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;

  }


  getArtistas(termino:string){
    let url= `${this.urlSpotify}search?query=${ termino }&type=artist&market=DO&offset=0&limit=20`;

    //recuerdate que este TOKEN VENCE CADA 1 HORA; ES DE SPOTIFY  
    let headers = this.getHeaders();

    //esto regresa un observable
    return this.http.get(url, {headers})
    .map( (resp: any) =>{
      this.artistas = resp.artists.items;
      return this.artistas;


    })
    

  }
  getArtista(id:string){
    let url= `${ this.urlSpotify }artists/${ id }`;

    //recuerdate que este TOKEN VENCE CADA 1 HORA; ES DE SPOTIFY  
    let headers = this.getHeaders()

    //esto regresa un observable
    return this.http.get(url, {headers});
    // .map( (resp: any) =>{
    //   this.artistas = resp.artists.items;
    //   return this.artistas;


    // })
    

  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders()

    return this.http.get(url, {headers})
  }

  

}
