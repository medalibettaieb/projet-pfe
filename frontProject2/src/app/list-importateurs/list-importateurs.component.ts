import { Component, OnInit } from '@angular/core';
import { importateurService } from '../shared/importateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-importateurs',
  templateUrl: './list-importateurs.component.html',
  styleUrls: ['./list-importateurs.component.css']
})
export class ListImportateursComponent implements OnInit {
  nbNavires:string
  nbAgents:string

  nbFournisseurs:string
  nbImportateurs:string

  constructor(public service:importateurService,public router:Router) { }

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
   this.service.getImportateursAdmin();

  
   
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


