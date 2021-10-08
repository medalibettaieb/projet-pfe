import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { importateurService } from 'src/app/shared/importateur.service';
import { Router } from '@angular/router';










@Component({
  selector: 'app-importateur',
  templateUrl: './importateur.component.html',
  styles: []
})
export class ImportateurComponent implements OnInit {

  constructor( public service:importateurService ,public router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();



      this.service.formData={




   importateurId:0,




  Cin:'',

   dateNaissance:'',
   UserName:'',
   photo:''



      }
    }

 onSubmit(form:NgForm)
 {
   if(this.service.formData. importateurId==0)
this.insertRecord(form);
else
this.updateRecord(form);

 }

 insertRecord(form:NgForm){

  this.service.PostImporteur().subscribe(res=>{ this.router.navigateByUrl("/profil");},err=>{console.log(err)});








 }

 updateRecord(form:NgForm){

  this.service.PutImportateur().subscribe(res=>{ this.router.navigateByUrl("/profil");},err=>{console.log(err)});
  //this.service.refreshList();



 }







}
