import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ErreursService} from '../services/erreurs.service';
import { Erreur } from '../models/erreur';

@Component({
  templateUrl: 'erreurs.component.html'
})
export class ErreursComponent {

  observableErreurs: Observable<Erreur[]>;
  erreurs: Erreur[];
  errorMessage: String;
  constructor(private erreursService: ErreursService) {}

  ngOnInit(): void {
    this.observableErreurs = this.erreursService.getErreursWithObservable();
    this.observableErreurs.subscribe(
      erreurs => this.erreurs = erreurs,
      error => this.errorMessage = <any>error);
  }
}
