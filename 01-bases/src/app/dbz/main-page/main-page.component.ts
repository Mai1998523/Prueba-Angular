import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{
  //personajes: Personaje[] = []
  
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  constructor(public dbzService: dbzService){ //definir propiedades. INYECCION DE DEPENDIENCIAS 
    // this.personajes = this.dbzService.personajes;
   }
 
   /*agregar(event: any){
    event.preventDefault();
    console.log("envia datos")
  }*/
  // get personajes():Personaje[]{
    //return this.dbzService.personajes
  //}
  //cambiarNombre(event: any){
  //  console.log(event)
  //}
  //agregarNuevoPersonaje(argumento: Personaje){
  //  this.personajes.push(argumento)
  //}
  
}
