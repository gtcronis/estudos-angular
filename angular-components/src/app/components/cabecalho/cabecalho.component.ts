import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  titulo = input('Esse título pode ser exportado chamando <app-cabecalho titulo=" NOME_TITULO"></app-cabecalho>')
}
