import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { user } from 'src/app/shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [	"vendor/bootstrap/css/bootstrap.min.css" ,"fonts/font-awesome-4.7.0/css/font-awesome.min.css",
  "fonts/Linearicons-Free-v1.0.0/icon-font.min.css",
  "vendor/animate/animate.css",
  "vendor/css-hamburgers/hamburgers.min.css",
  "vendor/animsition/css/animsition.min.css",
  "vendor/select2/select2.min.css",
  "vendor/daterangepicker/daterangepicker.css",
  "css/util.css",
  "css/main.css"


  ]
})
export class LoginComponent implements OnInit {
  formModel={
    UserName:'',
    Password:''
  }
  userDetails:user

  constructor( private service:UserService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    if((form.value.UserName=="Admin")&&(form.value.Password=="Admin"))
    {
      this.router.navigateByUrl("/profilAdmin");
     
    }
    this.service.login(form.value).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
    
      
      
    },
    err=>{
      if(err.status==400)
      {
        console.log(err);
      }
    }
    );

    ////////////////////////////
    this.service.getUserProgile().subscribe(res=>{this.userDetails=res as user
    

////////////////



    },err=>{console.log(err)});

    ////////////
    this.http.get(this.service.rootURL+'/General/redirection/'+this.userDetails.Id).toPromise().then(res=> {
      if (res==1)
      this.router.navigateByUrl("/profilAgent");
      else if(res==2)
      this.router.navigateByUrl("/profilFournisseur");
      else if(res==3)
      this.router.navigateByUrl("/profil");
      
      


    })
  }
  

}
