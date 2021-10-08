import { Component, OnInit } from '@angular/core';
import { importateurService } from '../shared/importateur.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { factureService } from '../shared/facture.service';
import { Importateur } from '../shared/importateur.model';
import { user } from '../shared/user.model';

@Component({
  selector: 'app-importateur-notifications',
  templateUrl: './importateur-notifications.component.html',
  styleUrls: ['./importateur-notifications.component.css']
})
export class ImportateurNotificationsComponent implements OnInit {
  photo:string
  Fullname:string
  Cin:string
  Date:string
  Email:string
  imp:Importateur
  userDetails:user
  nbNavires:string
  nbAgents:string

  nbFournisseurs:string
  nbImportateurs:string
  //Fournisseur:fournisseur
  //Navire:navire



  constructor(public service:importateurService,public router:Router,public service2:UserService,public service3:factureService) { }

  ngOnInit(): void {


    /*localStorage.setItem('importateurCin',this.formData.Cin);
    localStorage.setItem('importateurDate',this.formData.dateNaissance);*/


    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res as user
      localStorage.setItem('importateurFullName',this.userDetails.FullName);
      localStorage.setItem('importateurEmail',this.userDetails.Email);
      localStorage.setItem('id',this.userDetails.Id.toString()); // Id du user





    },err=>{console.log(err)});

    this.service.notifiations();
   var path:string=localStorage.getItem('importateurPhoto');

   path=path.replace("C:\\fakepath\\","/assets/img/");
   this.Fullname=localStorage.getItem('importateurFullName');
   this.Cin=localStorage.getItem('importateurCin');
   this.Email=localStorage.getItem('importateurEmail');
   this.Date=localStorage.getItem('importateurDate');

    this.photo=path;


    this.service.notifications2();
    this.service3.refreshList();
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

  onLogout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('importateurFullName');
    localStorage.removeItem('importateurCin');
    localStorage.removeItem('importateurEmail');
    localStorage.removeItem('importateurDate');
    localStorage.removeItem('importateurPhoto');
    localStorage.removeItem('importateurId');
    localStorage.removeItem('id');

    this.router.navigate(['/User/login']);

;
  }

  onDelete(factureId)
  {
    if(confirm(' Est ce que vous etes sur de vouloir supprimer cette ligne?'))
  this.service3.DeleteFacture(factureId).subscribe(res=>{this.service.refreshList();},err=>{console.log(err)});
  }
  onFacturation(factureId)
  {
    if(confirm(' Est ce que vous etes sur de facturer?'))
    this.service3.CalculerFacture(factureId).subscribe(res=>{this.service.refreshList();},err=>{console.log(err)});;


  }

}









