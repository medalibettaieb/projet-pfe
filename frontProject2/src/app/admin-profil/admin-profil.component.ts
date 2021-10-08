import { Component, OnInit } from '@angular/core';
import { importateurService } from '../shared/importateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: [
]

})
export class AdminProfilComponent implements OnInit {

  nbNavires:string
  nbAgents:string

  nbFournisseurs:string
  nbImportateurs:string

  constructor(public service:importateurService,public router:Router) {
   

   }

  ngOnInit(): void {

   // this.service.nbrAgents
    //this.service.nbrFournisseurs
   // this.service.nbrImportateurs
    this.service.nbreNavires();
    this.nbNavires=localStorage.getItem('nbrNavires');
   // localStorage.removeItem('nbrNavires');
    /////////////////////
    this.service.nbrAgents();
    this.nbAgents=localStorage.getItem('nbrAgents');
   // localStorage.removeItem('nbrAgents');
    //////////////////////
    this.service.nbrFournisseurs();
    this.nbFournisseurs=localStorage.getItem('nbrFournisseurs');
   // localStorage.removeItem('nbrFournisseurs');
    //////////////////
    this.service.nbrImportateurs();
    this.nbImportateurs=localStorage.getItem('nbrImportateurs');
    localStorage.removeItem('nbrImportateurs');

   
    
  }

  onclickImportateur(){
    this.router.navigateByUrl("/ListImportateurs");
    
  }
  onclickNavire(){
    this.router.navigateByUrl("/ListNavires");
    
  }
  onclickAgent(){
    this.router.navigateByUrl("/ListAgents");
    
  }
  onclickFournisseur(){
    this.router.navigateByUrl("/ListFournisseurs");
    
  }

}
