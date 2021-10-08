import { Component, OnInit } from '@angular/core';
import { importateurService } from 'src/app/shared/importateur.service';
import { Importateur } from 'src/app/shared/importateur.model';

import { Facture } from 'src/app/shared/facture.model';
import { factureService } from 'src/app/shared/facture.service';

@Component({
  selector: 'app-importateur-list',
  templateUrl: './importateur-list.component.html',
  styles: [
  ]
})
export class ImportateurListComponent implements OnInit {

  constructor( public service :importateurService, public service2:factureService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:Importateur){
    this.service.formData=Object.assign({},pd);

  }
  populateForm2(pd:Facture){
    this.service2.formData=Object.assign({},pd);
    this.service2.formData=Object.assign({FactureId:0, NomProduit:'',Quantite:'',PrixUnitaire:'',importateurId:pd.importateurId},0,'','',0,pd.importateurId);


  }

  onDelete(importateurId)
  {
    if(confirm(' Est ce que vous etes sur de vouloir supprimer cette ligne?'))
  this.service.DeleteImportateur(importateurId).subscribe(res=>{this.service.refreshList();},err=>{console.log(err)});
  }

}

