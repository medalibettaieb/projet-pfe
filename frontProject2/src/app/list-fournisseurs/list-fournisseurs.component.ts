import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { importateurService } from '../shared/importateur.service';

@Component({
  selector: 'app-list-fournisseurs',
  templateUrl: './list-fournisseurs.component.html',
  styleUrls: ['./list-fournisseurs.component.css']
})
export class ListFournisseursComponent implements OnInit {  nbNavires:string
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
   this.service.getFournisseursAdmin();

  
   
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


