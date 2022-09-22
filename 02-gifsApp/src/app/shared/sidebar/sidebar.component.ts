import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{
  
  constructor(private gifservice:GifsService){}
  get historial(){
    return this.gifservice.historial;
  }
  buscar(termino:string){
    console.log(termino);
    this.gifservice.buscarGifs(termino);
  }
}
