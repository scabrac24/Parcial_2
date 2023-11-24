import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestauranteDetail } from '../Clases/RestauranteDetail';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {


private apiUrl: string =  "https://gist.githubusercontent.com/t-montes/5ebece61782d6a06656b71a155ef0698/raw/2f50ca1a3d760da3535d2f374e84d7ea5193faa4/international-restaurants.json";


constructor(private http: HttpClient) { 
  this.getInfoRestaurantes();
}


getRestaurantes(): Observable<RestauranteDetail[]> {
  return this.http.get<RestauranteDetail[]>(this.apiUrl);
}

restaurantes: Array<RestauranteDetail> = [];

getInfoRestaurantes(): void { 
  this.getRestaurantes().subscribe((restaurantes) => {
    this.restaurantes = restaurantes;
  });
}



getRestauranteById(id: number): RestauranteDetail {
  return this.restaurantes.find(restaurantes => restaurantes.id === id) || new RestauranteDetail(0,'',0,'','',0,'','');
}


}

