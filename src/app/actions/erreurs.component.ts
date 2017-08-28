import {Component, OnInit,ViewChild} from '@angular/core';
import {Observable} from 'rxjs';

import {ErreursService} from '../services/erreurs.service';
import {Erreurs} from '../models/liste_erreurs';
import {DataTable, DataTableTranslations, DataTableResource} from 'angular-2-data-table';
import {erreurs} from '../models/erreurs-data';

@Component({
  templateUrl: 'erreurs.component.html',
    styleUrls: ['erreurs.component.css'],
  providers: [ErreursService]
})
export class ErreursComponent {

  erreursResource = new DataTableResource(erreurs);
  erreurs = [];
  erreursCount = 0;
  @ViewChild(DataTable) erreursTable;
  
//  observableErreurs: Observable<Erreurs>;
//  erreurs: Erreurs;
//  errorMessage: String;
  constructor(private erreursService: ErreursService) {
    this.erreursResource.count().then(count => this.erreursCount = count);
  }

  ngOnInit(): void {
//    this.observableErreurs = this.erreursService.getErreursWithObservable();
//    this.observableErreurs.subscribe(
//      erreurs => this.erreurs = erreurs,
//      error => this.errorMessage = <any>error);
  }
  
   reloadErreurs(params) {
        this.erreursResource.query(params).then(erreurs => this.erreurs = erreurs);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}
