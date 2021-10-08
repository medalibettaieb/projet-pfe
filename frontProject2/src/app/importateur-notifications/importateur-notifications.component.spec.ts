import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportateurNotificationsComponent } from './importateur-notifications.component';

describe('ImportateurNotificationsComponent', () => {
  let component: ImportateurNotificationsComponent;
  let fixture: ComponentFixture<ImportateurNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportateurNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportateurNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
