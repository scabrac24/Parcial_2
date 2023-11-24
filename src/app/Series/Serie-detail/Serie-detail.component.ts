import { Component, Input } from '@angular/core';
import { SerieDetail } from 'src/app/Clases/SerieDetail';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent {
  @Input() serie: SerieDetail | null = null;
}

