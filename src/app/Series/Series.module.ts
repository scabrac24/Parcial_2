import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieDetailComponent } from './Serie-detail/Serie-detail.component';
import { SerieListComponent } from './Serie-list/Serie-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieDetailComponent,SerieListComponent],
  declarations: [SerieDetailComponent,SerieListComponent]
})
export class SeriesModule { }
