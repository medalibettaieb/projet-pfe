import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

import { Router } from '@angular/router';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: []
})
export class RegistrationComponent implements OnInit {
  xyz:string;


  constructor(public service :UserService,public router:Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();


  }
  onActionSelected(val:any){
    this.xyz=val;
   
    }
   

  OnSubmit(){


    this.service.register().subscribe((res:any)=>{if(res.Succeeded){


      //this.service.formModel.reset();
      //this.router.navigateByUrl("/home");



    }},err=>{console.log(err);});

    this.service.login2().subscribe((res:any)=>{

      //if(res.Succeeded)
      localStorage.setItem('token',res.token);



      if(this.xyz=="importateur")
      this.router.navigateByUrl("/Importateur");
      if(this.xyz=="agent")
      this.router.navigateByUrl("/Agent");
      if(this.xyz=="Fournisseur")
      this.router.navigateByUrl("/Fournisseur");
     





    },
    err=>{
      if(err.status==400)
      {
        console.log(err);
      }
    }
    );



  }



}
