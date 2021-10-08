import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { UserService } from './shared/user.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{HttpClientModule} from"@angular/common/http";
import { ImportateursComponent } from './importateurs/importateurs.component';
import { ImportateurComponent } from './importateurs/importateur/importateur.component';
import { ImportateurListComponent } from './importateurs/importateur-list/importateur-list.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureComponent } from './factures/facture/facture.component';
import { FactureListComponent } from './factures/facture-list/facture-list.component';

import { RegistrationComponent } from './User/registration/registration.component';
import { UserComponent } from './User/user.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfilImportateurComponent } from './importateurs/profil-importateur/profil-importateur.component';
import { ProfilAgentComponent } from './agents/profil-agent/profil-agent.component';
import { FournisseurProfilComponent } from './fournisseurs/fournisseur-profil/fournisseur-profil.component';
import { AgentComponent } from './agents/agent/agent.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';

import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { ListImportateursComponent } from './list-importateurs/list-importateurs.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { ListNaviresComponent } from './list-navires/list-navires.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { ImportateurFacturesComponent } from './importateur-factures/importateur-factures.component';
import { ImportateurNotificationsComponent } from './importateur-notifications/importateur-notifications.component';
import { ModalFournisseurComponent } from './modal-fournisseur/modal-fournisseur.component';
import { ModalNavireComponent } from './modal-navire/modal-navire.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { importateurService } from './shared/importateur.service';
import { ModalDocumentComponent } from './modal-document/modal-document.component';
import { ImportateurDossierComponent } from './importateur-dossier/importateur-dossier.component';









@NgModule({
  declarations: [
    AppComponent,

    UserComponent,
    ImportateursComponent,
    ImportateurComponent,
    ImportateurListComponent,
    FacturesComponent,
    FactureComponent,
    FactureListComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfilImportateurComponent,
    ProfilAgentComponent,
    FournisseurProfilComponent,
    AgentComponent,
    FournisseurComponent,
  
    AdminProfilComponent,
  
    ListImportateursComponent,
  
    ListAgentsComponent,
  
    ListNaviresComponent,
  
    ListFournisseursComponent,
  
    ImportateurFacturesComponent,
  
    ImportateurNotificationsComponent,
  
    ModalFournisseurComponent,
  
    ModalNavireComponent,
  
    CalendrierComponent,
  
    ModalDocumentComponent,
  
    ImportateurDossierComponent,
 





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    















  ],
  providers: [UserService,importateurService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
