import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/models/Movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {

  id: number = 0;
  imagen: string = "";
  safeURL: any;
  movie: Movie = {
    id: 0,
    title: '',
    description: '',
    rating: 0,
    duration: '',
    genre: [],
    released_date: new Date(),
    trailer: ''
  };
  constructor(
    private moviesService: MoviesService,
    private actRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller
  ) {
    this.id = this.actRoute.snapshot.params['id'];
    this.getMovie();
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer.replace("watch?v=", "embed/"));
  }
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getMovie() {
    this.movie = this.moviesService.getMovie(this.id);
    this.imagen = `assets/${this.movie.id}.png`;

  }

  getDate(date: Date) {
    const d = date.getDate();
    const m = date.toLocaleString('en-US', { month: 'long' }); // Nombre completo del mes en inglés
    const y = date.getFullYear();

    // Construye la cadena de texto en el formato deseado
    return `${d} ${m} ${y}`;
  }
}
