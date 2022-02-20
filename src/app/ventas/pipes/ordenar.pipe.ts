import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  
  transform(heroe: Heroes[], ordenarPor: string = 'sin valor'): Heroes[]  {
    
    switch (ordenarPor) {
      case 'nombre':
        return heroe = heroe.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1)
      case 'vuela':
        return heroe = heroe.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1)
      case 'color':
        return heroe = heroe.sort((a,b) => (a.color > b.color) ? 1 : -1)
      default:
        return heroe;
    }
    // if(ordernarPor === 'sin valor'){
    //   return heroe
    // }
    // else{
    //   heroe = heroe.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1)
    // }
   
    // return heroe
  }

}
