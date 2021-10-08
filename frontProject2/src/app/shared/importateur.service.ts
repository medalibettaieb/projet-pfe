import { Injectable } from '@angular/core';

import{HttpClient} from"@angular/common/http";
import { Importateur } from './importateur.model';
import { Facture } from './facture.model';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

import { notification } from './notification.model';

import { agent } from './agent.model';
import { fournisseur } from './fournisseur.model';
import { navire } from './navire.model';
import { document} from './document.model';
import { not } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class importateurService {
   formData:Importateur
   formData2:Importateur
   formdatad:document={
    DocumentId:0,
   
    contenu:'',
    importateurId:0
   }
  
     
   
   formData3:agent
   formData4:fournisseur
   formData5:navire
   formData7:Facture
   connecte:Importateur={
    
    importateurId:0,
    Cin:'',
    dateNaissance:'',
    UserName:'',
    photo:''

    

  }



   id:number=0;
  readonly rootURL = 'http://localhost:50544/api';
  list : Importateur[]
 
  list4:navire[]

  list8:fournisseur[]
  list9:agent[]
  list5:Facture[]
  list6:Facture[]
  userDetails;
  list2 : Facture[]
  list3:notification[]
  dates=[];
  nb:number
  agents:number
  navires:number
  fournisseurs:number
  importateurs:number
listx:document[]


  constructor( public http:HttpClient,public service2:UserService) {

    //this.formData7.FId=0;



  }

  PostFacture(){
     this.http.post(this.rootURL+'/Factures',this.formData7).toPromise().then(res=>{console.log(res)});
 
 
 
   }

   
  refreshList4(id){
    console.log("fuuuuuuuuuuuuuuuuuuuuuuuuuuck");

    this.http.get(this.rootURL+'/Fournisseurs/service2/'+id).toPromise().then(res=> this.list5= res as Facture[]);
  }

  PostFournisseur(){



    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res},err=>{console.log(err)});
    this.formData4.UserName=this.userDetails.Id;


    //profil d 'utilisateur conneécté
    localStorage.setItem('fournisseurPhoto',this.formData4.photo);
    localStorage.setItem('fournisseurCin',this.formData4.Cin);
    localStorage.setItem('fournisseurDate',this.formData4.dateNaissance);
    localStorage.setItem('fournisseurFullName',this.userDetails.FullName);
    localStorage.setItem('fournisseurEmail',this.userDetails.Email);
    localStorage.setItem('fournisseurId',this.userDetails.Id);



   return this.http.post(this.rootURL+'/Fournisseurs',this.formData4);



  }

  PostAgent(){



    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res;
      this.formData3.UserName=this.userDetails.Id;
    
    
    },err=>{console.log(err)});
    


    //profil d 'utilisateur conneécté
    localStorage.setItem('agentPhoto',this.formData3.photo);
    localStorage.setItem('agentCin',this.formData3.Cin);
    localStorage.setItem('agentDate',this.formData3.dateNaissance);
    localStorage.setItem('agentFullName',this.userDetails.FullName);
    localStorage.setItem('agentEmail',this.userDetails.Email);
    localStorage.setItem('agentId',this.userDetails.Id);



   return this.http.post(this.rootURL+'/Agents',this.formData3);



  }

  PostImporteur(){



    this.service2.getUserProgile().subscribe(res=>{this.userDetails=res},err=>{console.log(err)});
    this.formData.UserName=this.userDetails.Id;


    //profil d 'utilisateur conneécté
    localStorage.setItem('importateurPhoto',this.formData.photo);
    localStorage.setItem('importateurCin',this.formData.Cin);
    localStorage.setItem('importateurDate',this.formData.dateNaissance);
    localStorage.setItem('importateurFullName',this.userDetails.FullName);
    localStorage.setItem('importateurEmail',this.userDetails.Email);
    localStorage.setItem('importateurId',this.userDetails.Id);



   return this.http.post(this.rootURL+'/Importateurs',this.formData);



  }

  PutImportateur(){


    return this.http.put(this.rootURL+'/Importateurs/'+this.formData2.importateurId,this.formData2);




   }
   PutDossierImportateur(){

    this.formdatad.importateurId=+localStorage.getItem('importateurId');
     return  this.http.post(this.rootURL+'/Importateurs/hello',this.formdatad);
  



   }
   PutImportateur2(){


 




   }

   DeleteImportateur(id){
    return this.http.delete(this.rootURL+'/Importateurs/'+id);
   }
  refreshList(){

    this.http.get(this.rootURL+'/Importateurs').toPromise().then(res=> this.list= res as Importateur[]);
  }



  identification2(email:String,mdp:String)
  {




        this.http.get(this.rootURL+'/General/redirection2/'+email+'/'+mdp).toPromise().then(res=> this.formData= res as Importateur);


      this.id=this.formData.importateurId;





  }

  factures()
  {
    if (this.list2==null)
    {
     return this.http.get(this.rootURL+'/Importateurs/service/'+this.id).toPromise().then(res=> this.list2= res as Facture[]);
    }


  }

  notifiations(){

      this.http.get(this.rootURL+'/importateurs/service2/'+localStorage.getItem('id')).toPromise().then(res=> {this.formData2=res as Importateur;localStorage.setItem('id',this.formData2.importateurId.toString())
      console.log(this.formData2.UserName);

      localStorage.setItem('importateurCin',this.formData2.Cin);
      localStorage.setItem('importateurPhoto',this.formData2.photo);
      localStorage.setItem('importateurId',this.formData2.importateurId.toString());
      localStorage.setItem('importateurDate',this.formData2.dateNaissance);
      localStorage.setItem('userName',this.formData2.UserName);

    });


    console.log(this.formData2);


  }

  notifiationsA(){

    this.http.get(this.rootURL+'/Agents/service2/'+localStorage.getItem('id')).toPromise().then(res=> {this.formData3=res as agent;localStorage.setItem('id',this.formData3.AgenteId.toString())
    console.log(this.formData3.UserName);

    localStorage.setItem('agentCin',this.formData3.Cin);
    localStorage.setItem('agentPhoto',this.formData3.photo);
    localStorage.setItem('agentId',this.formData3.AgenteId.toString());
    localStorage.setItem('agentDate',this.formData3.dateNaissance);
    localStorage.setItem('agentGrade',this.formData3.grade);
    localStorage.setItem('agentNum',this.formData3.numCS.toString());
    console.log(this.formData3);

  });


  



  
}

getDocuments()
{
  this.http.get(this.rootURL+'/Importateurs/dossier/'+localStorage.getItem('importateurId')).toPromise().then(res=> {this.listx=res as document[];},err =>{console.log(err)});
  
}
notifiationsF(){

  this.http.get(this.rootURL+'/Fournisseurs/service3/'+localStorage.getItem('id')).toPromise().then(res=> {this.formData4=res as fournisseur;localStorage.setItem('id',this.formData4.FId.toString())
  console.log(this.formData4.Domaine);

  localStorage.setItem('fournisseurCin',this.formData4.Cin);
  localStorage.setItem('fournisseurPhoto',this.formData4.photo);
  localStorage.setItem('fournisseurId',this.formData4.FId.toString());
  localStorage.setItem('fournisseurDate',this.formData4.dateNaissance);
  localStorage.setItem('fournisseurPays',this.formData4.Pays);
  localStorage.setItem('fournisseurDomaine',this.formData4.Domaine);
  localStorage.setItem('fournisseurNom',this.formData4.nomS);
  localStorage.setItem('fournisseurNum',this.formData4.numFisc.toString());

});







}

  notifications2()
  {


   this.http.get(this.rootURL+'/notifications/service4/'+localStorage.getItem('importateurId')).toPromise().then(res=>{
    this.list3= res as notification[];


      var datex=this.list3[0].date;

      console.log(datex);

     this.dates.push(datex);

     this.list3.forEach(element=>{
 if(datex!=element.date)
 {
   this.dates.push(element.date);
   datex=element.date;

 }


     })






     //console.log(this.dates);
   });




   //this.datex=this.list3[0].date;






  }

  getNavires(){

    
  this.http.get(this.rootURL+'/Navires').toPromise().then(res=> {  
    (res as navire[]).forEach(element => {


      element.photo=element.photo.replace("C:/fakepath/","/assets/img/");
     
      
      
      
    });
    
    this.list4=res as navire[];

    
  

  
});



  }

  getFactures(navireId)
  {
    this.http.get(this.rootURL+'/Factures/service4/'+navireId).toPromise().then(res=> {this.list6=res as Facture[];});
  }

  confirmArrivee(navireId)
  {
    if(confirm(' Est ce que vous etes sur de confirmer  l arrivée de ce navire ?'))
    {
      this.http.get(this.rootURL+'/Navires/'+navireId).toPromise().then(res=> {  
        this.formData5=res as navire;
        console.log(this.formData5);

        this.formData5.confirmationArrive=true;
      
       
       
      
      
    });


    

      /////////////
 

     
    }

    this.modifierNavire(navireId,this.formData5);
  }
  modifierNavire(navireId,formData5)
  {
    console.log("hello");
    (this.http.get(this.rootURL+'/Navires/serviceM/'+navireId)).toPromise().then(res=> { 
      console.log("hello2"); 
  });
 
    
    
  }

  confirmFacture(Fid,FactureId)
  {

    if(confirm(' Est ce que vous etes sur de confirmer  la reception de ce packet  Une notification sera envoyée a l importateur concerné !?'))
    {
      this.http.get(this.rootURL+'/Factures/serviceM/'+Fid).toPromise().then(res=> {  
        this.formData7=res as Facture;
        
       

       

        
      
       
       
      
      
    });
    var not={
      notId:0,
      message:'',
      date: '',
      heure:'',
      importateur:null,
   
      importateurId:0
  
  
    }
    not.importateurId=0;
    not.notId=0;
    not.date="";
    not.heure="";
    not.message="Votre Commande est arrivée au port de Rades , vous pouvez venir la recueprer dans 3 jours ouvrables";
    
    console.log(not);
     return this.http.post(this.rootURL+'/Notifications/'+FactureId,not).toPromise().then(res=>{console.log(res)});

   


  }

 




}

refuserFacture(Fid,FactureId)
{

  
  if(confirm(' Est ce que vous etes sur de refuser  la reception de ce packet  Une notification sera envoyée a l importateur concerné !?'))
  {
    this.http.get(this.rootURL+'/Factures/serviceM2/'+Fid).toPromise().then(res=> {  
      this.formData7=res as Facture;
     
    
     
      
    
     
     
    
    
  });

  var not={
    notId:0,
    message:'',
    date: '',
    heure:'',
    importateur:null,
 
    importateurId:0


  }
  not.importateurId=0;
  not.notId=0;
  not.date="";
  not.heure="";
  not.message="Nous avons le regret de vous infromer que votre commande est arrivée au port mais rejetée par le service de douane.Veuillez vous presentez sur place !";
  console.log(not);
  
 return  this.http.post(this.rootURL+'/Notifications/'+FactureId,not).toPromise().then(res=>{console.log(res)});

 

 



}

  
}

getImportateur(id)
{
  this.http.get(this.rootURL+'/importateurs/'+id).toPromise().then(res=> {
    
  
    
    
    this.formData2=res as Importateur;
  
    
  });

  
}
nbrAgents(){

  this.http.get(this.rootURL+'/Agents/nbr').toPromise().then(res=> {
    
  
    
    
    localStorage.setItem('nbrAgents',(res as number).toString())
  
    
  });

 



}
nbrImportateurs()
{

  this.http.get(this.rootURL+'/importateurs/nbr').toPromise().then(res=> {
    
  
    
    
    localStorage.setItem('nbrImportateurs',(res as number).toString())
  
    
  });

}

nbrFournisseurs()
{

  this.http.get(this.rootURL+'/Fournisseurs/nbr').toPromise().then(res=> {
    
  
    
    
    localStorage.setItem('nbrFournisseurs',(res as number).toString())
  
    
  });


}

nbreNavires(){
  this.http.get(this.rootURL+'/Navires/nbr').toPromise().then(res=> {
    
  
    
    
   localStorage.setItem('nbrNavires',(res as number).toString())
  
    
  });
}



/*list : Importateur[]
 
list4:navire[]

list8:fournisseur[]
list9:agent[]
*/
getImportateursAdmin()
{

  
  this.http.get(this.rootURL+'/Importateurs/Importateurs2').toPromise().then(res=> {
    
  
    
    
    this.list=res as Importateur[]
  
    
  });

}
getAgentsAdmin()
{
  this.http.get(this.rootURL+'/Agents/Agents2').toPromise().then(res=> {
    
  
    
    
    this.list9=res as agent[]
  
    
  });

}
getFournisseursAdmin()
{
  this.http.get(this.rootURL+'/Fournisseurs/Fournisseurs2').toPromise().then(res=> {
    
  
    
    
    this.list8=res as fournisseur[]
  
    
  });

}

getNaviresAdmin()
{

  this.http.get(this.rootURL+'/Navires/Navires2').toPromise().then(res=> {
    
  
    
    
    this.list4=res as navire[]
  
    
  });

}


}
