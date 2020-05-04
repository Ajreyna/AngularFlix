import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeroComponent } from './hero/hero.component';
import { TitleListComponent } from './title-list/title-list.component';
import { HeroButtonComponent } from './hero-button/hero-button.component';
import { ItemComponent } from './item/item.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchBoxComponent,
    HeroComponent,
    TitleListComponent,
    HeroButtonComponent,
    ItemComponent,
    ListToggleComponent,
    NavigationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
