import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CheckboxModule} from 'primeng/checkbox';
import { HomeComponent } from './home/home.component';
import { VanishreePortfolioComponent } from './portfolios/vanishree-portfolio/vanishree-portfolio.component';
import { ChandruPortfolioComponent } from './portfolios/chandru-portfolio/chandru-portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VanishreePortfolioComponent,
    ChandruPortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
