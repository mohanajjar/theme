import {NgModule} from '@angular/core';

import {ContrepassationNormaleComponent} from './contrepassation-normale.component';
import {ContrepassationDemandeComponent} from './contrepassation-demande.component';
import {ErreursComponent} from '../actions/erreurs.component';
import {TracesComponent} from '../actions/traces.component';
import { FormsModule } from '@angular/forms';
import {RechercheErreursComponent} from '../actions/recherche.erreurs.component';
import {CollapsibleModule} from 'angular2-collapsible'; // <-- import the module

import {ActionsRoutingModule} from './actions-routing.module';

@NgModule({
  imports: [
    ActionsRoutingModule,
    FormsModule,
    CollapsibleModule],
  declarations: [
    ContrepassationNormaleComponent,
    ContrepassationDemandeComponent,
    TracesComponent,
    RechercheErreursComponent,
    ErreursComponent
  ]
})
export class ActionsModule {}
