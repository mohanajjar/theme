import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ErreursService} from '../services/erreurs.service';
import {Erreurs} from '../models/liste_erreurs';

@Component({
  templateUrl: 'erreurs.component.html',
  providers: [ErreursService]
})
export class ErreursComponent {

  observableErreurs: Observable<Erreurs>;
  erreurs: Erreurs;
  errorMessage: String;
  constructor(private erreursService: ErreursService) {}

  ngOnInit(): void {
    this.observableErreurs = this.erreursService.getErreursWithObservable();
    this.observableErreurs.subscribe(
      erreurs => this.erreurs = erreurs,
      error => this.errorMessage = <any>error);
  }
}
