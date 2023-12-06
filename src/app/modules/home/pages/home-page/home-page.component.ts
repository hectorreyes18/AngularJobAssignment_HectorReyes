import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Movie } from 'src/app/core/models/Movie.model';
import { MoviesService } from 'src/app/services/movies.service';

declare var M: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  slider: Movie[] = [];
  sort: number = 1;
  movies: Movie[] = [];
  moviesAll: Movie[] = [];
  genres: string[] = [];
  genreSelect: string[] = [];
  movieSelected: string = "all";
  options = {
    menuWidth: 300, // Default is 240
    edge: 'right' // Choose the horizontal origin
  };

  constructor(
    private moviesService: MoviesService,
    private cdr: ChangeDetectorRef
  ) {

  }


  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instancesSelect = M.FormSelect.init(elems, {});
    var elemsside = document.querySelectorAll('.sidenav');
    var instancesSide = M.Sidenav.init(elemsside, {});
    var elemsSlider = document.querySelectorAll('.slider');
    var instanceSlider = M.Slider.init(elemsSlider, {});
    this.getGenre();
    this.getMovies();


  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
    this.moviesAll = this.moviesService.getMovies();
    this.slider = this.moviesService.getMovies();
  }

  getGenre() {
    this.genres = this.moviesService.getGenre();
    console.log(this.genres);
  }

  sortMovies() {
    if (this.sort == 1) {
      this.movies.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else {
      this.movies.sort((a, b) => a.released_date.getTime() - b.released_date.getTime());
    }

  }

  filterMovies(genre: string) {
    this.movieSelected = genre;
    if (genre == 'all') {
      this.movies = this.moviesAll;
    } else {
      this.movies = this.moviesAll.filter(movie => movie.genre.includes(genre));
    }
  }

  getImage(id: number) {
    return `assets/${id}.png`;
  }

}
