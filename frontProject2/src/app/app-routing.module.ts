import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './User/registration/registration.component';
import { UserComponent } from './User/user.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ImportateurComponent } from './importateurs/importateur/importateur.component';
import { ProfilImportateurComponent } from './importateurs/profil-importateur/profil-importateur.component';
import { AgentComponent } from './agents/agent/agent.component';
import { ProfilAgentComponent } from './agents/profil-agent/profil-agent.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseurProfilComponent } from './fournisseurs/fournisseur-profil/fournisseur-profil.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { ListImportateursComponent } from './list-importateurs/list-importateurs.component';
import { ListNaviresComponent } from './list-navires/list-navires.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { ImportateurFacturesComponent } from './importateur-factures/importateur-factures.component';
import { ImportateurNotificationsComponent } from './importateur-notifications/importateur-notifications.component';
import { ModalFournisseurComponent } from './modal-fournisseur/modal-fournisseur.component';
import { ModalNavireComponent } from './modal-navire/modal-navire.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ModalDocumentComponent } from './modal-document/modal-document.component';
import { ImportateurDossierComponent } from './importateur-dossier/importateur-dossier.component';






const routes:Routes=[ {path:'',redirectTo:'/User/registration',pathMatch:'full'},
{path:'User',component:UserComponent,children:[{path:'registration',component:RegistrationComponent},{path:'login',component:LoginComponent}]},
{path:'home',component:HomeComponent},
{path:'Importateur',component:ImportateurComponent},
{path:'profil',component:ProfilImportateurComponent},
{path:'Agent',component:AgentComponent},
{path:'profilAgent',component:ProfilAgentComponent},
{path:'Fournisseur',component:FournisseurComponent},
{path:'profilFournisseur',component:FournisseurProfilComponent},
{path:'profilAdmin',component:AdminProfilComponent},
{path:'ListFournisseurs',component:ListFournisseursComponent},
{path:'ListAgents',component:ListAgentsComponent},
{path:'ListNavires',component:ListNaviresComponent},
{path:'ListImportateurs',component:ListImportateursComponent},
{path:'ImportateurFactures',component:ImportateurFacturesComponent},
{path:'ImportateurNotifications',component:ImportateurNotificationsComponent},
{path:'ModalFournisseur',component:ModalFournisseurComponent},
{path:'ModalNavire',component:ModalNavireComponent},
{path:'Calendrier',component:CalendrierComponent},
{path:'ModalDocument',component:ModalDocumentComponent},
{path:'ImportateurDossier',component:ImportateurDossierComponent}






/*this.router.navigateByUrl("/ListImportateurs");
    
  }
  onclickNavire(){
    this.router.navigateByUrl("/ListNavires");
    
  }
  onclickAgent(){
    this.router.navigateByUrl("/ListAgents");
    
  }
  onclickFournisseur(){
    this.router.navigateByUrl("/ListFournisseurs");*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
