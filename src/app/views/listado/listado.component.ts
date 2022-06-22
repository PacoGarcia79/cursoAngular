import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas : Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Uno',
        resumen: 'Resumen uno'
      },
      {
        titulo: 'Dos',
        resumen: 'Resumen dos'
      }
    ];
  }

  ngOnInit(): void {
  }

}
