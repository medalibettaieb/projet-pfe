import { Injectable } from '@angular/core';

import{HttpClient} from"@angular/common/http";

import { Facture } from './facture.model';

import { filtre } from './filtre.model';

@Injectable({
  providedIn: 'root'
})
export class filtreService {
  formData:filtre

  readonly rootURL = 'http://localhost:50544/api';
  list : Facture[];

  constructor( public http:HttpClient) { }


  refreshList2(min,max){

    this.http.get(this.rootURL+'/Factures/FILTRE/'+min+'/'+max).toPromise().then(res=> this.list= res as Facture[]);
  }




}
