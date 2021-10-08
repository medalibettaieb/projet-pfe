import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user.model';
import { importateurService } from 'src/app/shared/importateur.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { factureService } from 'src/app/shared/facture.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: []
})
export class FournisseurComponent implements OnInit {

  userDetails:user
  photo:string
  Fullname:string
  Cin:string
  Date:string
  Email:string

  constructor(public service:importateurService,public router:Router) { }

  ngOnInit(): void {
    this.service.formData4={
     FId :0,

      numFisc:0,
     
      Pays:'',
     
      Domaine:'',
     nomS:'',
     
     
     
     Cin:'',
     
     
     dateNaissance:'',
      UserName:'',
      photo:''
     
    }
   
  }

  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();



      this.service.formData3={




        AgenteId:0,
 
        numCS:0,
    
       grade:'',
     
  
     
       Cin:'',
       
       dateNaissance:'',
      
       UserName:'',
  
       photo:'',
       




      }
    }

 onSubmit(form:NgForm)
 {
   if(this.service.formData4.FId==0)
this.insertRecord3(form);
else
this.updateRecord3(form);

 }

 insertRecord3(form:NgForm){

  this.service.PostFournisseur().subscribe(res=>{ this.router.navigateByUrl("/profilFournisseur");},err=>{console.log(err)});








 }

 updateRecord3(form:NgForm){

  this.service.PutImportateur().subscribe(res=>{ this.router.navigateByUrl("/profil");},err=>{console.log(err)});
  //this.service.refreshList();



 }


   

}

