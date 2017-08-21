import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErreursParCriteres} from '../models/erreursparcriteres'

@Component({
  templateUrl: 'recherche.erreurs.component.html',
  styleUrls: ['./recherche.erreurs.component.css']
})
export class RechercheErreursComponent implements OnInit {
  erreursParCriteres: ErreursParCriteres = new ErreursParCriteres();
  product: any = {};
  public submitted = false;
  public data;

  date2 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
  gmtDate = '2015-01-01T00:00:00.000Z';

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
