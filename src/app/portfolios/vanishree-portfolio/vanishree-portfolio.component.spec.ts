import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanishreePortfolioComponent } from './vanishree-portfolio.component';

describe('VanishreePortfolioComponent', () => {
  let component: VanishreePortfolioComponent;
  let fixture: ComponentFixture<VanishreePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanishreePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanishreePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
