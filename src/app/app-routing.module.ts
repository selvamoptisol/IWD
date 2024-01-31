import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { VanishreePortfolioComponent } from './portfolios/vanishree-portfolio/vanishree-portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'vanishree', 
    component: VanishreePortfolioComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }