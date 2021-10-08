import { Component, OnInit } from '@angular/core';

import { factureService } from 'src/app/shared/facture.service';
import { Facture } from 'src/app/shared/facture.model';
import { filtreService } from 'src/app/shared/filtre.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styles: [
  ]
})
export class FactureListComponent implements OnInit {

  constructor( public service :factureService,public service2 :filtreService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service2.formData={
      min:0,
      max:0
    }
  }

  populateForm(pd:Facture){
    this.service.formData=Object.assign({},pd);
  }
  onDelete(factureId)
  {
    if(confirm(' Est ce que vous etes sur de vouloir supprimer cette ligne?'))
  this.service.DeleteFacture(factureId).subscribe(res=>{this.service.refreshList();},err=>{console.log(err)});
  }
  onFacturation(factureId)
  {
    if(confirm(' Est ce que vous etes sur de facturer?'))
    this.service.CalculerFacture(factureId).subscribe(res=>{this.service.refreshList();},err=>{console.log(err)});;


  }
  onFiltre(form:NgForm)
  {

    this.service.refreshList2(this.service2.formData.min,this.service2.formData.max);
  }

}

