import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


export const routes: Routes = [
    { path: '',component:HomeComponent},
    {path: 'contador',component:ContadorComponent},
    {path: 'tarefas',component:TarefasComponent},
    {path: '**',component:NotfoundComponent}
    
];
