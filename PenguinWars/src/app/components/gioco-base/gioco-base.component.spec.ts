import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocoBaseComponent } from './gioco-base.component';

describe('GiocoBaseComponent', () => {
  let component: GiocoBaseComponent;
  let fixture: ComponentFixture<GiocoBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocoBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
