import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './Series/Serie-list/Serie-list.component';
import { SerieDetailComponent } from './Series/Serie-detail/Serie-detail.component';

const routes: Routes = [
  { path: 'Series', component: SerieListComponent },
  { path: '', redirectTo: '/Series', pathMatch: 'full' },
  { path: 'Serie/:id', component: SerieDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }