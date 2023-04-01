import { comediaFilms } from './components/models/comediaFilms';
import { dramaFilms } from './components/models/dramaFilms';
import { Component } from '@angular/core';
import { topFilms } from './components/models/topFilms';
import { terrorFilms } from './components/models/terrorFilms';
import { animeFilms } from './components/models/animeFilms';
import { accionFilms } from './components/models/accionFilms';
import { scifiFilms } from './components/models/scifiFilms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netflix_App';
  topFilms = topFilms;
  animeFilms = animeFilms;
  accionFilms = accionFilms;
  terrorFilms = terrorFilms;
  scifiFilms = scifiFilms;
  dramaFilms = dramaFilms;
  comediaFilms = comediaFilms;
}
