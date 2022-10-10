import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNavComponent } from './ads-nav.component';

describe('AdsNavComponent', () => {
  let component: AdsNavComponent;
  let fixture: ComponentFixture<AdsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
