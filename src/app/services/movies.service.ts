import { Injectable } from '@angular/core';
import { Movie } from '../core/models/Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] =[
    {
      id:1,
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: 7.8,
      duration: "2h 30 min",
      genre: ["Action", "Sci-Fi"],
      released_date: new Date("09/03/2020"),
      trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
    },
    { 
      id:2,
      title: "Spider-Man: Into the Spider-Verse",
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: "1h 57min",
      genre: ["Action", "Animation", "Adventure"],
      released_date: new Date("12/14/2018"), 
      trailer: "https://www.youtube.com/watch?v=tg52up16eq0"
    },
    {
      id:3,
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family." ,
      rating: 7.9,
      duration: "2h 10min",
      genre: ["Comedy", "Crime", "Drama"],
      released_date: new Date("11,27,2019"),
      trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    },
    {
      id:4,
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      rating: 8.0,
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Comedy"],
      released_date: new Date("08/01/2014") ,
      trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA"
    },
     {
      id:5,
      title: "Avengers: Age of Ultron",
      description:" When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3 ,
      duration: "2h 21min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      released_date: new Date("05/01,2015"),
      trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do"
    } 
  ];


  constructor() { }

  getMovies(){
   
    return this.movies;
  }

  getGenre(){
    return ["Action", "Sci-Fi" ,"Animation", "Adventure","Comedy", "Crime", "Drama"];
  }
  getMovie(id: number){
    return this.movies.find(m => m.id == id)!;
  }
}
