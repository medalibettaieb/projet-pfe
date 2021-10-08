import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootURL = 'http://localhost:50544/api';



  constructor(private fb:FormBuilder,private http:HttpClient,
    private router:Router ) {




   }
   formModel =this.fb.group({
     UserName:['',Validators.required],
     Email:['',Validators.email],
     FullName:['',Validators.required],
     Type:[],
     Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(8)]],
      ConfirmPassword:['',Validators.required],
      

     },{validator:this.comparePasswords})

   });
   comparePasswords(fb:FormGroup)
   {
     let confirmPswrdCtrl=fb.get('ConfirmPassword');
     if(confirmPswrdCtrl.errors==null||'passwordMismatch' in confirmPswrdCtrl.errors)
     {
       if(fb.get('Password').value!=confirmPswrdCtrl.value)
       {
        confirmPswrdCtrl.setErrors({passwordMismatch:true});
       }
       else{
        confirmPswrdCtrl.setErrors(null);
       }

     }

   }
   register()
   {


      var body={
        UserName:this.formModel.value.UserName,
        Email:this.formModel.value.Email,
        FullName:this.formModel.value.FullName,
        Password:this.formModel.value.Passwords.Password
        



      };


     //this.router.navigateByUrl('/Importateur');
     localStorage.setItem("UserName",this.formModel.value.UserName);
     localStorage.setItem("Password",this.formModel.value.Passwords.Password);
     localStorage.setItem("Type",this.formModel.value.Type);
      console.log(this.formModel.value.UserName);
     console.log(this.formModel.value.Type);
      return  this.http.post(this.rootURL+'/ApplicationUser/Register',body);
   }


   login(formData)
   {
    return  this.http.post(this.rootURL+'/ApplicationUser/Login',formData);

   }

   login2()
   {

    var body={
      UserName:localStorage.getItem("UserName"),
      Password:localStorage.getItem("Password")





    };
    return  this.http.post(this.rootURL+'/ApplicationUser/Login',body);

   }

getUserProgile(){


  var tokenHeader=new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
  return this.http.get(this.rootURL+'/UserProfile/profile',{headers:tokenHeader});
}


  }





