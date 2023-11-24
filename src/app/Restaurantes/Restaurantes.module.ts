import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteDetailComponent } from './RestauranteDetail/RestauranteDetail.component';
import { RestauranteListComponent } from './RestauranteList/RestauranteList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RestauranteListComponent,RestauranteDetailComponent],
  declarations: [RestauranteListComponent,RestauranteDetailComponent]
})
export class RestaurantesModule { }
