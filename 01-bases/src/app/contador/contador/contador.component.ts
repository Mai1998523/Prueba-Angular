import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1> 
    <h3>La base es <span>{{base}}</span></h3>
    
    <button (click)="acumulador(base)"> + {{base}} </button>
    <span>{{numero}}</span>
    <button (click)=acumulador(-base)> - {{base}} </button>
    `
    ///*OPCION 01 NO RECOMENDADA
    //<button (click)="numero=numero+1;"> +1 </button>
    //<button (click)="numero=numero-1;"> -1 </button>-->
    //<!--}*OPCION 02 MEJOR, PERO AUN SE PUEDE SINPLIFICAR MAS-->
    //<button (click)=sumar()> +1 </button>
    //<button (click)=restar()> -1 </button>
    //<!--OPCION 3 - SIMPLIFICADA-->
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  /*OPCION 01
    sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  }*/
  base: number = 5;

  acumulador(valor:number){
    this.numero+=valor;
  }
}