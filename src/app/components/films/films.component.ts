import { Component, Input } from '@angular/core';
import { films } from '../models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() filmsGalery: films = {section: '', films: []};

}
