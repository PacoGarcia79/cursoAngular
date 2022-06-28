import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas : Entrada[];

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  constructor(private entradaService: EntradaService) {

    this.listadoEntradas = [{title: "prueba", body: "PRUEBA"}];

  }

  private recuperarEntradas() : void {

    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    )


  }





}
