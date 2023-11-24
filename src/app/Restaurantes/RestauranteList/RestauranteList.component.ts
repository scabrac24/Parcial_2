import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/Clases/Restaurante';
import { RestauranteService } from '../Restaurante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-RestauranteList',
  templateUrl: './RestauranteList.component.html',
  styleUrls: []
})
export class RestauranteListComponent implements OnInit {

  restaurantes: Array<Restaurante> = [];
 
  selectedRestaurante: Restaurante | null = null;

  restauranteConMayorPuntaje: Restaurante | null = null;

  constructor(private restauranteService: RestauranteService, private router: Router) { }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
      this.calcularRestauranteConMayorPuntaje();
      
      
    });
  }

  
  showDetail(restaurante: Restaurante): void {
    this.selectedRestaurante = restaurante;
  }

  private calcularRestauranteConMayorPuntaje(): void {
    if (this.restaurantes.length > 0) {
      this.restauranteConMayorPuntaje = this.restaurantes.reduce((restauranteMax, restauranteActual) => {
        return restauranteActual.rating > (restauranteMax ? restauranteMax.rating : 0) ? restauranteActual : restauranteMax;
      }, this.restaurantes[0]);
    }
  }

  

  
  ngOnInit() {
    this.getRestaurantes();
  }

}

