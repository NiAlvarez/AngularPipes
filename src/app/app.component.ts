import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primeNgConfig: PrimeNGConfig){}

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

  ngOnInit() {
      this.primeNgConfig.ripple = true;
  }
}
