import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContrepassationNormaleComponent} from './contrepassation-normale.component';
import {ContrepassationDemandeComponent} from './contrepassation-demande.component';
import {ErreursComponent} from '../actions/erreurs.component';
import {RechercheErreursComponent} from '../actions/recherche.erreurs.component';
import {TracesComponent} from '../actions/traces.component';

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
      }, {
        path: 'erreurs',
        component: ErreursComponent,
        data: {
          title: 'Erreurs'
        }
      }, {
        path: 'receherche-erreurs',
        component: RechercheErreursComponent,
        data: {
          title: 'Recherche par critères'
        }
      },
      {
        path: 'traces',
        component: TracesComponent,
        data: {
          title: 'Traces'
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
