import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  

import { AppComponent } from './app.component';
import { SerieListComponent } from './Series/Serie-list/Serie-list.component';
import { SerieDetailComponent } from './Series/Serie-detail/Serie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    SerieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
