import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tarefas',
  imports: [CabecalhoComponent, RouterLink],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
minhasTarefas: Tarefa[]=[
  {
    id:1,
    titulo:'Estudar Angular',
    descricao: 'Componentes',
    prazo:'28/09/2026',
    concluido: true
  },
  {
    id:2,
    titulo:'Estudar Banco Dados',
    descricao: 'Componentes',
    prazo:'29/09/2026',
    concluido: false
  },
  {id:3,
    titulo:'Atividade Ética',
    descricao: 'Componentes',
    prazo:'30/09/2026',
    concluido: false
  }

]

}

type Tarefa = {
id: number,
titulo: string,
descricao: string,
prazo: string,  
concluido: boolean
}
