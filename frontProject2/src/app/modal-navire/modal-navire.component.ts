import { Component, OnInit } from '@angular/core';
import { factureService } from '../shared/facture.service';

@Component({
  selector: 'app-modal-navire',
  templateUrl: './modal-navire.component.html',
  styleUrls: ['./modal-navire.component.css']
})
export class ModalNavireComponent implements OnInit {

  constructor(public service3:factureService) { }

  ngOnInit(): void {

this.service3.getNavire2();  }

}