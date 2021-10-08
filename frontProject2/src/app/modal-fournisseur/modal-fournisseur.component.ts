import { Component, OnInit } from '@angular/core';
import { factureService } from '../shared/facture.service';
import { ProfilImportateurComponent } from '../importateurs/profil-importateur/profil-importateur.component';

@Component({
  selector: 'app-modal-fournisseur',
  templateUrl: './modal-fournisseur.component.html',
  styleUrls: ['./modal-fournisseur.component.css']
})
export class ModalFournisseurComponent implements OnInit {

  constructor(public service3:factureService) { }

  ngOnInit(): void {

this.service3.getFournisseur2();  }

}
