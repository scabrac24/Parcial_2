import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SerieDetail } from '../Clases/SerieDetail';

@Injectable({
  providedIn: 'root'
})
export class SerieService {


private apiUrl: string =  "https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json";


constructor(private http: HttpClient) { 
  this.getInfoSeries();
}


getSeries(): Observable<SerieDetail[]> {
  return this.http.get<SerieDetail[]>(this.apiUrl);
}

series: Array<SerieDetail> = [];

getInfoSeries(): void { 
  this.getSeries().subscribe((series) => {
    this.series = series;
  });
}

giveSerieByName(name: string): SerieDetail { 
  for (let serie of this.series) {
    if ('> '+serie.name === name) {
      return serie;
    }
  }
  return new SerieDetail(0,'','',0,'','','');
}

getAverageSeasons(series: SerieDetail[]): number {
  const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return totalSeasons / series.length;
}

getSerieById(id: number): SerieDetail {
  return this.series.find(serie => serie.id === id) || new SerieDetail(0, '', '', 0,'','','');
}


}
