import {Component, OnInit, Directive} from '@angular/core';
import {Router} from '@angular/router';
import { FormControl,FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  templateUrl: 'recherche.erreurs.component.html',
  styleUrls: ['./recherche.erreurs.component.css'],
})
export class RechercheErreursComponent implements OnInit {
  erreurForm: FormGroup;

  public submitted = false;
  public data;
  

  constructor(private fb: FormBuilder) {
    this.erreurForm = this.fb.group({
      code_type_erreur: [],
      id_eo: [],
      code_type_eo: [],
      id_sequence: [],
      numero_contrat: [],
      source_erreur: [],
      date_debut_erreur: ['', Validators.required],
      date_fin_erreur: ['', Validators.required],
      nom_fichier: []
    }, {Validator: this.validateDatesRand('date_debut_erreur', 'date_fin_erreur')});
  }

  validateDatesRand(startdate: string, endDate: string) {
     console.log('Inside methodeeeeeeeeeeeeeee: ');
    return (group: FormGroup): {[key: string]: any} => {
      let start = group.controls[startdate];
      let end = group.controls[endDate];
      if (start.value > end.value) {
        return {
          dates: "Date Date debut doit être inférieur ou egal à la date de date de fin"
        };
      }
      return {};
    }
  }

  ngOnInit() {

  }

  searchErreurs(erreurForm) {
    
     let start = group.controls[startdate];
      let end = group.controls[endDate];
      if (start.value > end.value) {
        return {
          dates: "Date Date debut doit être inférieur ou egal à la date de date de fin"
        };
      }
    
    this.submitted = true;
    this.data = JSON.stringify(erreurForm);
    console.log('Template-driven form submitted: ', erreurForm);
    console.log(this.erreurForm);
  }

  //  onLoggedin() {
  //    console.log('hiiiiiiiiiiiiiiiiiiiiiii');
  //    this.router.navigate(['erreurs']);
  //    //    localStorage.setItem('isLoggedin', 'true');
  //  }
}
