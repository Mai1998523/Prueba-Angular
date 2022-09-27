import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string='https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }

  constructor(private http:HttpClient){}
  //peticiones http
  buscarPais( termino:String ):Observable<Country[]>{ //la informacoin luse asi
    const url=`${ this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }
  buscarCapital( termino:string):Observable<Country[]>{
    const urlCapital=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( urlCapital, {params: this.httpParams} );

  }
  getPaisPorAlpha(id:string):Observable<Country>{
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }
  buscarRegion(region:string):Observable<Country[]>{
    const url=`${this.apiUrl}/regionalbloc/${region}`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
    //return this.http.get<Country[]>( url );
  }
} 

/*return this.http.get( url)
  .pipe(
      catchError( err => of(['Hola mundo?]) ) //muestra error por consola
  ) */