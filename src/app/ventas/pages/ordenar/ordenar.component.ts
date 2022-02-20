import { Component } from '@angular/core';
import { Heroes, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent   {

  enMayus: boolean = false;
  ordenarPor: string = '';
 
  heroes: Heroes[] = [
    {
     nombre: 'Superman',
     vuela: true,
     color: Color.azul 
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro 
     },
     {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
     },
     {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo 
     },
     {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde 
     }
  ];

  cambiarMayus(){
    this.enMayus = !this.enMayus;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    console.log(valor)
  }




}
