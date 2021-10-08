import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNaviresComponent } from './list-navires.component';

describe('ListNaviresComponent', () => {
  let component: ListNaviresComponent;
  let fixture: ComponentFixture<ListNaviresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNaviresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNaviresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
