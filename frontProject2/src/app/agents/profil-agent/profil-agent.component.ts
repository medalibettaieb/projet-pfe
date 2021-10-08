import { Component, OnInit } from '@angular/core';
import { importateurService } from 'src/app/shared/importateur.service';
import { Router } from '@angular/router';
import { factureService } from 'src/app/shared/facture.service';
import { UserService } from 'src/app/shared/user.service';
import { user } from 'src/app/shared/user.model';

@Component({
  selector: 'app-profil-agent',
  templateUrl: './profil-agent.component.html',
  styleUrls: ['tableau.css','card.css']
})
export class ProfilAgentComponent implements OnInit {

  userDetails:user
  photo:string
  Fullname:string
  Cin:string
  Date:string
  Email:string

  constructor(public service:importateurService,public router:Router,public service2:UserService,public service3:factureService) { }

  ngOnInit(): void {


    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res as user
      localStorage.setItem('agentFullName',this.userDetails.FullName);
      localStorage.setItem('agentEmail',this.userDetails.Email);
      localStorage.setItem('id',this.userDetails.Id.toString()); // Id du user
      this.service.getNavires();
      console.log(this.photo);





    },err=>{console.log(err)});

    this.service.notifiationsA();
   var path:string=localStorage.getItem('agentPhoto');

   path=path.replace("C:\\fakepath\\","/assets/img/");
   this.Fullname=localStorage.getItem('agentFullName');
   this.Cin=localStorage.getItem('agentCin');
   this.Email=localStorage.getItem('agentEmail');
   this.Date=localStorage.getItem('agentDate');

    this.photo=path;

    
  


   
    //this.service3.refreshList();////////////////

  }

  onLogoutA()
  {
    
    /////////////////////
    localStorage.removeItem('token');
    localStorage.removeItem('agentFullName');
    localStorage.removeItem('agentCin');
    localStorage.removeItem('agentEmail');
    localStorage.removeItem('agentDate');
    localStorage.removeItem('agentPhoto');
    localStorage.removeItem('agentId');
    localStorage.removeItem('agentGrade');
    localStorage.removeItem('agentNum');
    
    localStorage.removeItem('id');

    this.router.navigate(['/User/login']);

;
  }

}
