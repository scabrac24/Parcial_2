import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteDetailComponent } from './Restaurantes/RestauranteDetail/RestauranteDetail.component';
import { RestauranteListComponent } from './Restaurantes/RestauranteList/RestauranteList.component';

const routes: Routes = [
  { path: 'Restaurantes', component: RestauranteListComponent },
  { path: '', redirectTo: '/Restaurantes', pathMatch: 'full' },
  { path: 'Restaurante/:id', component: RestauranteDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }