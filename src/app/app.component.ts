import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre : string = 'nicolas alvarez'

  valor: number = 1000

  obj = {
    nombre: 'Nicolas'
  }

  cambiarNombre(){
    console.log(this.nombre)
    console.log(this.valor)
  }

  title = 'pipesApp';
}
