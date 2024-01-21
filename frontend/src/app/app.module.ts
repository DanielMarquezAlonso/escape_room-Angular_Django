import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComunicacionService } from './comunicacion.service';
import { ApiService } from './api.service';
import { HttpClientModule } from "@angular/common/http";
import { RankingComponent } from './ranking/ranking.component';
import { Nivel1Component } from './nivel1/nivel1.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FinComponent } from './fin/fin.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdTimerModule } from 'angular-cd-timer';

import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    FinComponent,
    MenuComponent,
    Nivel1Component,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CdTimerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
