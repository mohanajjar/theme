import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'recherche.erreurs.component.html'
})
export class RechercheErreursComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  onLoggedin() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiii');
    this.router.navigate(['erreurs']);
    //    localStorage.setItem('isLoggedin', 'true');
  }
}
