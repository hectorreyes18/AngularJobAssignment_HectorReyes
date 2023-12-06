import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/Movie.model';
import * as $ from 'jquery';

declare var M: any;

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, AfterViewInit {
  @Input() value: Movie = {
    id: 0,
    title: '',
    description: '',
    rating: 0,
    duration: '',
    genre: [],
    released_date: new Date(),
    trailer: ''
  };

  imagen: string = "";
  onList: boolean = false;
  constructor(
    private router: Router
  ) {

  }
  ngAfterViewInit(): void {
    let options = {};
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);

  }
  ngOnInit(): void {
    this.verifyWatchList();
    this.imagen = `assets/${this.value.id}.png`;
  }

  getInfo() {
    let info = `
    <div style="max-width: 300px !important;text-align: justify;" >
      <p ><b>Title: </b>${this.value.title}</p>
      <p ><b>Description: </b>${this.value.description}</p>
      <p ><b>Raiting: </b>${this.value.rating}</p>
      <p ><b>Duration: </b>${this.value.duration}</p>
      <p ><b>Genre: </b>${this.value.genre}</p>
      <p ><b>Released date: </b>${this.getDate(this.value.released_date)}</p>
      <p ><b>Genre: </b>${this.value.genre}</p>

    </div>
    `;

    return info;
  }


  getDate(date: Date) {
    const d = date.getDate();
    const m = date.toLocaleString('en-US', { month: 'long' });
    const y = date.getFullYear();

    return `${d} ${m} ${y}`;
  }

  details() {
    let options = {};
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
    instances[0].close();
    this.router.navigate([`/movie-details/${this.value.id}`]);
  }

  addWatchList() {
    let wl: [any] = JSON.parse(localStorage.getItem("watchList") || "[]");

    if (!wl.includes(this.value.id)) {
      wl.push(this.value.id);
      localStorage.setItem("watchList", JSON.stringify(wl));
    } else {
      localStorage.setItem("watchList", JSON.stringify(wl.filter(id => id !== this.value.id)));
    }
    this.verifyWatchList();
  }

  verifyWatchList() {
    let wl: [any] = JSON.parse(localStorage.getItem("watchList")!);
    if (wl.includes(this.value.id)) {
      this.onList = true;
    } else {
      this.onList = false;
    }
  }
}
