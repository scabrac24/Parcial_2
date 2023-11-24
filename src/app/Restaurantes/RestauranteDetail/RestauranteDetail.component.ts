import { Component, Input} from '@angular/core';
import { RestauranteDetail } from 'src/app/Clases/RestauranteDetail';


@Component({
  selector: 'app-RestauranteDetail',
  templateUrl: './RestauranteDetail.component.html',
  styleUrls: ['./RestauranteDetail.component.css']
})
export class RestauranteDetailComponent{

  @Input() restaurante: RestauranteDetail | null = null;

}
