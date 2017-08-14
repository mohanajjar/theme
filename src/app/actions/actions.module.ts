import { NgModule } from '@angular/core';

import { ContrepassationNormaleComponent } from './contrepassation-normale.component';
import { ContrepassationDemandeComponent } from './contrepassation-demande.component';

import { ActionsRoutingModule } from './actions-routing.module';

@NgModule({
  imports: [ ActionsRoutingModule ],
  declarations: [
    ContrepassationNormaleComponent,
    ContrepassationDemandeComponent
  ]
})
export class ActionsModule { }
