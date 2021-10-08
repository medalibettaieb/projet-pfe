import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { factureService } from 'src/app/shared/facture.service';
import { importateurService } from 'src/app/shared/importateur.service';










@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styles: []
})
export class FactureComponent implements OnInit {

  constructor( public service:factureService,public service2:importateurService ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();



      this.service.formData={



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

 onSubmit(form:NgForm)
 {
   if((this.service.formData. FactureId==0)&&(this.service.formData.importateurId!=0))
   {

    this.insertRecord(form);
this.service.CalculerFacture(this.service.formData.FactureId);
   }

else
{
  this.updateRecord(form);
  this.service.CalculerFacture(this.service.formData.FactureId);

}


 }

 insertRecord(form:NgForm){

  this.service.PostFacture().subscribe(res=>{this.service.refreshList()},err=>{console.log(err)});
  this.service.refreshList();



 }

 updateRecord(form:NgForm){

  this.service.PutFacture().subscribe(res=>{this.service.refreshList()},err=>{console.log(err)});
  this.service.refreshList();



 }







}
