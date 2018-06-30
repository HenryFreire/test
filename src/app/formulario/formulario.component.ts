import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  numeroUno: number;
  numeroDos: number;

  constructor() { }

  ngOnInit() {
    console.log('Formulario cargado');
  }

  sumar() {

  }

}
