import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrepassationNormaleComponent } from './contrepassation-normale.component';
import { ContrepassationDemandeComponent } from './contrepassation-demande.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contrepassation'
    },
    children: [
      {
        path: 'contrepassation-normale',
        component: ContrepassationNormaleComponent,
        data: {
          title: 'Normale'
        }
      },
      {
        path: 'contrepassation-demande',
        component: ContrepassationDemandeComponent,
        data: {
          title: 'A la demande'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule {}
