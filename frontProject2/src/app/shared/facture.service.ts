import { Injectable } from '@angular/core';

import{HttpClient} from"@angular/common/http";

import { Facture } from './facture.model';
import { importateurService } from './importateur.service';
import { Importateur } from './importateur.model';
import { navire } from './navire.model';
import { fournisseur } from './fournisseur.model';
import { Router } from '@angular/router';
import { document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class factureService {
  formData:Facture;
  dossier:document

  fournisseur:fournisseur=new fournisseur()
  navire:navire=null
  navirePhoto:string=null

  readonly rootURL = 'http://localhost:50544/api';
  list : Facture[];
  

  constructor( public http:HttpClient,public router:Router) { }

  PostFacture(){
   return this.http.post(this.rootURL+'/Factures',this.formData);



  }
  CalculerFacture(id)
  {
   return this.http.head(this.rootURL+'/Factures/API/'+id);
  }

  PutFacture(){
    return this.http.put(this.rootURL+'/Factures/'+this.formData.FactureId,this.formData);




   }



   DeleteFacture(id){
    return this.http.delete(this.rootURL+'/Factures/'+id);
   }
  refreshList(){

    this.http.get(this.rootURL+'/Factures/service3/'+localStorage.getItem('importateurId')).toPromise().then(res=> this.list= res as Facture[]);
  }

  getFournisseur(idF)
  {
     this.http.get(this.rootURL+'/Fournisseurs/'+idF).toPromise().then(res=>{var fac=res as fournisseur; this.fournisseur=res as fournisseur} );
     localStorage.setItem('idF',idF);
     this.router.navigateByUrl('/ModalFournisseur'); 
     
  }
  getNavire(idN)
  {

   
     this.http.get(this.rootURL+'/Navires/'+idN).toPromise().then(res=>{ this.navire=res as navire
   
      localStorage.setItem('bateauPhoto',this.navire.photo);
      localStorage.setItem('idN',idN);
      this.router.navigateByUrl('/ModalNavire'); 
    
    //this.navire.photo
    
    //this.navire.photo.replace("\\","/");
    
    ////assets/img/
    
    } );
  
    close()
    {
      this.router.navigateByUrl("/profil"); 
    }
  
    
   
 
    
    
  }

  refreshList2(min,max){

    this.http.get(this.rootURL+'/Factures/FILTRE/'+min+'/'+max).toPromise().then(res=> this.list= res as Facture[]);
  }
  getClient(id){
    
  }
  getFournisseur2()
  {
    
    var idF= localStorage.getItem('idF');
    this.http.get(this.rootURL+'/Fournisseurs/'+idF).toPromise().then(res=>{var fac=res as fournisseur; this.fournisseur=res as fournisseur} );
     this.router.navigateByUrl('/ModalFournisseur'); 
     
  }
  getNavire2()
  {

   var idN= localStorage.getItem('idN');
     this.http.get(this.rootURL+'/Navires/'+idN).toPromise().then(res=>{ this.navire=res as navire
   
      localStorage.setItem('bateauPhoto',this.navire.photo);
     
      this.router.navigateByUrl('/ModalNavire'); 
    
    //this.navire.photo
    
    //this.navire.photo.replace("\\","/");
    
    ////assets/img/
    
    } );

  }

  
  getDossier(){
    
  var idN=+localStorage.getItem('Idd');
   this.http.get(this.rootURL+'/Importateurs/Dossier2/'+idN).toPromise().then(res=>{ this.dossier=res as document
 
    localStorage.setItem('documentContenu',this.dossier.contenu);
   
    this.router.navigateByUrl('/ModalDocument'); 
  
  //this.navire.photo
  
  //this.navire.photo.replace("\\","/");
  
  ////assets/img/
  
  } );

  }
  DeleteDossier()
  {
    var idN=+localStorage.getItem('Idd');
    this.http.delete(this.rootURL+'/Importateurs/dossier/'+idN).toPromise().then(res=>{ },err=>{console.log(err)});
  
 
    
     this.router.navigateByUrl('/profil'); 
  }


}
