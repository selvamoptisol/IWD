import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandruPortfolioComponent } from './chandru-portfolio.component';

describe('ChandruPortfolioComponent', () => {
  let component: ChandruPortfolioComponent;
  let fixture: ComponentFixture<ChandruPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandruPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandruPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
