import { Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { EstanteComponent } from './estante/estante.component';

export const routes: Routes = [{
  path:'escritorio',component:EscritorioComponent
},{
  path:'estante',component:EstanteComponent
}];
