import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  

import { AppComponent } from './app.component';
import { RestauranteDetailComponent } from './Restaurantes/RestauranteDetail/RestauranteDetail.component';
import { RestauranteListComponent } from './Restaurantes/RestauranteList/RestauranteList.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteListComponent,
    RestauranteDetailComponent
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
