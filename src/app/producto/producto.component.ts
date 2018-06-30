import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

    nombre: string = 'laptop';
    presio: number = 20;
    productos : Array<object> = [];
    frmValidado = false;

  constructor() {}

  ngOnInit() {
  }

  guardar(){
      const producto = {
        nombre: this.nombre,
        presio: this.presio
    };
    this.productos.push(producto);
    console.log(this.productos);


  }

}
