import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {BottomNavigationModule} from "./components/bottom-navigation/bottom-navigation.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from "./components/toolbar/toolbar.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {MyslagsModule} from "./components/myslags/myslags.module";
import {PainelModule} from "./components/painel/painel.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    BottomNavigationModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MyslagsModule,
    PainelModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
