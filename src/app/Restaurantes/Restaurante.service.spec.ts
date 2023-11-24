/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestauranteService } from './Restaurante.service';

describe('Service: Restaurante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestauranteService]
    });
  });

  it('should ...', inject([RestauranteService], (service: RestauranteService) => {
    expect(service).toBeTruthy();
  }));
});
