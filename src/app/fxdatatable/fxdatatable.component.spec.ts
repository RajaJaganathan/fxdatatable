import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxdatatableComponent } from './fxdatatable.component';

describe('FxdatatableComponent', () => {
  let component: FxdatatableComponent;
  let fixture: ComponentFixture<FxdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
