import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErreursParCriteres} from '../models/erreursparcriteres'
@Component({
  templateUrl: 'recherche.erreurs.component.html'
})
export class RechercheErreursComponent implements OnInit {
  erreursParCriteres: ErreursParCriteres = new ErreursParCriteres();
  product: any = {};
  public submitted = false;
  public data;

  constructor() {
  }
  ngOnInit() {

  }

  searchErreurs() {
    this.submitted = true;
    this.data = JSON.stringify(this.erreursParCriteres);
    console.log('Template-driven form submitted: ', this.erreursParCriteres);
    console.log(this.erreursParCriteres);
  }

  //  onLoggedin() {
  //    console.log('hiiiiiiiiiiiiiiiiiiiiiii');
  //    this.router.navigate(['erreurs']);
  //    //    localStorage.setItem('isLoggedin', 'true');
  //  }
}
