import { Component,OnInit } from '@angular/core';
import {MovieServicesService} from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';

  constructor(private movieService: MovieServicesService) {}
  ngOnInit(): void {
    this.searchResults = this.movieService.getSearchResults();
    this.myMovieList = this.movieService.getMovieList();
    this.movieService.loadMovieList();
}}
