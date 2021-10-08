import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportateurFacturesComponent } from './importateur-factures.component';

describe('ImportateurFacturesComponent', () => {
  let component: ImportateurFacturesComponent;
  let fixture: ComponentFixture<ImportateurFacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportateurFacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportateurFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
