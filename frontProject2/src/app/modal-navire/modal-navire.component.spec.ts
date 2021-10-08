import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNavireComponent } from './modal-navire.component';

describe('ModalNavireComponent', () => {
  let component: ModalNavireComponent;
  let fixture: ComponentFixture<ModalNavireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNavireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
