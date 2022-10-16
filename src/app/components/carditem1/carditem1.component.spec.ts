import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carditem1Component } from './carditem1.component';

describe('Carditem1Component', () => {
  let component: Carditem1Component;
  let fixture: ComponentFixture<Carditem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carditem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carditem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
