import { Component } from '@angular/core';
import { movieList } from './data/movie-list';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: Movie[] = movieList
  title = 'movie';
}
