import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportateurDossierComponent } from './importateur-dossier.component';

describe('ImportateurDossierComponent', () => {
  let component: ImportateurDossierComponent;
  let fixture: ComponentFixture<ImportateurDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportateurDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportateurDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
