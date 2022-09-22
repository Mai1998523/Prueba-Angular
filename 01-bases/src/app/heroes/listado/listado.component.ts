import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'iroman', 'hulk', 'thor', 'capitan america'];
  heroeBorrado : string = "";
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
