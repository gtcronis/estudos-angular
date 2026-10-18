import { Component,input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
   titulo = input('Titulo EXPORT');

   menuAberto: boolean = false;

   alternarMenu():void {
    this.menuAberto = !this.menuAberto;
   }

}
