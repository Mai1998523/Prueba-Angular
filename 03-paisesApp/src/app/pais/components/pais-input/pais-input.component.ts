import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{
 
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //nombre del evento iniciado con ON
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string='';


  debouncer: Subject<string> = new Subject(); //observable
  termino: string='';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  buscar(){
    //console.log('hola mundo');
    //console.log(this.termino)
    this.onEnter.emit( this.termino );
  }
  teclaPresionada(event: any){
    this.debouncer.next( this.termino);
  }

}
