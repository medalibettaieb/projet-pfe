import { Component, OnInit } from '@angular/core';
import { importateurService } from 'src/app/shared/importateur.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: []
})
export class AgentComponent implements OnInit {

  constructor(public service:importateurService,public router:Router) { }

  ngOnInit(): void {

    this.service.formData3={




      AgenteId:0,

      numCS:0,
  
     grade:'',
   

   
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
  
       photo:''




      }
    }

 onSubmit(form:NgForm)
 {
   if(this.service.formData3.AgenteId==0)
this.insertRecord2(form);
else
this.updateRecord2(form);

 }

 insertRecord2(form:NgForm){

  this.service.PostAgent().subscribe(res=>{ this.router.navigateByUrl("/profilAgent");},err=>{console.log(err)});








 }

 updateRecord2(form:NgForm){

  this.service.PutImportateur().subscribe(res=>{ this.router.navigateByUrl("/profil");},err=>{console.log(err)});
  //this.service.refreshList();



 }

}
