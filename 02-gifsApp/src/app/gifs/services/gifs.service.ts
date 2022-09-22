import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private api_key: string="b871NuCFvFLbHqyzsfYWySwRaIHYFZ8S";
  private servicioUrl: string ="https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];
  //TODO: Cambiar any por su tipo
  public resultados: Gif[]=[];

  get historial(){
    //this._historial = this._historial.splice(0,10);
    return [...this._historial];
  }

  constructor( private http: HttpClient){
    //localStorage.getItem('Historial');
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];


    //if( localStorage.getItem('historial'))
    //this._historial = JSON.parse(localStorage.getItem('historial')!);
  }

  //insertar valores
  buscarGifs( query: string){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));// GRABAR LOCAL STORAGE
    }
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', query);

    console.log(params.toString());

    //console.log(this._historial);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe( ( resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));      
    });

  }
}
