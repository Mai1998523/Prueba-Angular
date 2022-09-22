import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  /*Emision al padre */
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

constructor(private dbzService: dbzService){

}

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    //console.log(this.nuevo) 
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonajes(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
/*

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{
  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
*/