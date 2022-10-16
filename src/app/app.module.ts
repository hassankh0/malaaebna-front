import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NavButtonComponent } from './components/nav/nav-button/nav-button.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AdsNavComponent } from './components/ads-nav/ads-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardItemComponent } from './components/cards-list/card-item/card-item.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { Carditem1Component } from './components/carditem1/carditem1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NavButtonComponent,
    ContactUsComponent,
    AdsNavComponent,
    SearchBarComponent,
    CardsListComponent,
    CardItemComponent,
    ReservationComponent,
    Carditem1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
