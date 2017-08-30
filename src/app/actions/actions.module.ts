import {NgModule} from '@angular/core';

import {ContrepassationNormaleComponent} from './contrepassation-normale.component';
import {ContrepassationDemandeComponent} from './contrepassation-demande.component';
import {ErreursComponent} from '../actions/erreurs.component';
import {TracesComponent} from '../actions/traces.component';
import {RechercheErreursComponent} from '../actions/recherche.erreurs.component';
import {CollapsibleModule} from 'angular2-collapsible'; // <-- import the module
import {ActionsRoutingModule} from './actions-routing.module';
import {DataTableModule} from 'angular-2-data-table';
import {CommonModule} from '@angular/common';
import {BookService} from '../services/book.service';
import {ErreursService} from '../services/erreurs.service';
import {CustomFormsModule} from 'ng2-validation'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    DataTableModule,
    FormsModule,
    CustomFormsModule,
    CommonModule,
    ActionsRoutingModule,
    CollapsibleModule,
    ReactiveFormsModule],
  providers: [
    BookService
  ],
  declarations: [
    ContrepassationNormaleComponent,
    ContrepassationDemandeComponent,
    TracesComponent,
    RechercheErreursComponent,
    ErreursComponent
  ]
})
export class ActionsModule {}
