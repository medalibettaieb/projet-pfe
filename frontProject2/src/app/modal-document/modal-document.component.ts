import { Component, OnInit } from '@angular/core';
import { factureService } from '../shared/facture.service';

@Component({
  selector: 'app-modal-document',
  templateUrl: './modal-document.component.html',
  styleUrls: ['./modal-document.component.css']
})
export class ModalDocumentComponent implements OnInit {

  constructor(public service3:factureService) { }

  ngOnInit(): void {

   this.service3.getDossier();
  }
  Ondelete()
  {
    this.service3.DeleteDossier();
  
  }


}



