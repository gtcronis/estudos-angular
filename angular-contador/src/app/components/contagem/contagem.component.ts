import { Component,input } from '@angular/core';

@Component({
  selector: 'app-contagem',
  imports: [],
  templateUrl: './contagem.component.html',
  styleUrl: './contagem.component.css'
})
export class ContagemComponent {
  titulo = input('Contador')
  contador =0

  aumentar(){
    this.contador=this.contador + 1
  }
  
  diminuir(){
    this.contador=this.contador -1
  }
}
