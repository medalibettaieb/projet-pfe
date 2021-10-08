import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user.model';
import { importateurService } from 'src/app/shared/importateur.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

import { factureService } from 'src/app/shared/facture.service';



@Component({
  selector: 'app-fournisseur-profil',
  templateUrl: './fournisseur-profil.component.html',
  styleUrls: ['tableau.css','card.css']
})
export class FournisseurProfilComponent implements OnInit {

  userDetails:user
  photo:string
  Fullname:string
  Cin:string
  Date:string
  Email:string

  constructor(public service:importateurService,public router:Router,public service2:UserService,public service3:factureService) {

    
   }

   xyz:string;
   xyz2:string;
   photoNavire:string

   onActionSelected(val:any){
    this.xyz=val;
    console.log(val);
    this.service.formData7.importateurId=+this.xyz;  ///ici on recupere l i d de l importateur selectionne par le fournisseur 
   
    }
    onActionSelected2(val:any){
      this.xyz2=val;
      console.log(val);
      this.service.formData7.navireId=+this.xyz2;  ///ici on recupere l i d du navire selectionné
     
      }

  ngOnInit(): void {

    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res as user
      localStorage.setItem('fournisseurFullName',this.userDetails.FullName);
      localStorage.setItem('fournisseurEmail',this.userDetails.Email);
      localStorage.setItem('id',this.userDetails.Id.toString()); // Id du user

////////////////



    },err=>{console.log(err)});

    this.service.notifiationsF();///////////
   var path:string=localStorage.getItem('fournisseurPhoto');

   path=path.replace("C:\\fakepath\\","/assets/img/");
   this.Fullname=localStorage.getItem('fournisseurFullName');
   this.Cin=localStorage.getItem('fournisseurCin');
   this.Email=localStorage.getItem('fournisseurEmail');
   this.Date=localStorage.getItem('fournisseurDate');

    this.photo=path;
    this.refrechlist();
    this.service.refreshList();
    this.service.getNavires();
    this.service.refreshList4(localStorage.getItem('fournisseurId'));
    console.log("im heeeeeeeeeeeeeere");
    
    
  }

  refrechlist()
  {

    this.service.formData7={



      FactureId:0,
  
      NomProduit:'',
  
           Quantite:'',
  
       PrixUnitaire:'',
       Total:'',
       importateurId:0,
       FId:0,
       navireId:0,
       confirmation:false
  
  
    }

  }
  
  onLogoutF()
  {
   
    /////////////////
    localStorage.removeItem('token');
    localStorage.removeItem('fournisseurFullName');
    localStorage.removeItem('fournisseurCin');
    localStorage.removeItem('fournisseurEmail');
    localStorage.removeItem('fournisseurDate');
    localStorage.removeItem('fournisseurPhoto');
    localStorage.removeItem('fournisseurId');
    localStorage.removeItem('fournisseurPays');
    localStorage.removeItem('fournisseurNom');
    localStorage.removeItem('fournisseurNum');
    localStorage.removeItem('id');

    this.router.navigate(['/User/login']);

;
  }
  onSubmit(){

    this.service.formData7.FId=+localStorage.getItem('fournisseurId');
    this.service.formData7.FactureId=0;
    this.service.formData7.confirmation=false;
    console.log(this.service.formData7);
    this.service.PostFacture();
    console .log("je suis iciiiiiiiiiiiiiiiiiii");
    
  
  }



}
