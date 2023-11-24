import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/Clases/Serie';
import { SerieService } from '../Serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Serie-list',
  templateUrl: './Serie-list.component.html',
  styleUrls: []
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons!: number;
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService, private router: Router) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
      
    });
  }

  private calculateAverageSeasons(): void {
    this.averageSeasons = this.serieService.getAverageSeasons(this.series);
  }

 
  showDetail(serie: Serie): void {
    this.selectedSerie = serie;
  }

  
  ngOnInit() {
    this.getSeries();
  }

}
