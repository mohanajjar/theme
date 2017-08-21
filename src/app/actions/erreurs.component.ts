import {Component} from '@angular/core';
import {ErreursParCriteres} from '../models/erreursparcriteres'
import {ErreursService} from './services/erreurs.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: 'erreurs.component.html'
})
export class ErreursComponent {
  erreursParCriteres: ErreursParCriteres = new ErreursParCriteres();
  observableErreurs: Observable<ErreursParCriteres[]>
  erreurs: ErreursParCriteres[];
  errorMessage: String;

  constructor(private ErreursService: ErreursService) {}

  ngOnInit() {
    this.observableErreurs = this.ErreursService.getErreursWithObservable();
    this.observableErreurs.subscribe(serreurs => this.erreurs = serreurs,
      error => this.errorMessage = <any>error);
  }

}
