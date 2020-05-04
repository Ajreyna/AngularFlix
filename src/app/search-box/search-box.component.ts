import { Component, OnInit } from '@angular/core';
import {MovieServicesService} from '../services/movie-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private movieService: MovieServicesService) { }

  ngOnInit() {
  }
  loadSearch(e){
    return this.movieService.searchForMovies(e.target.value);

  }

}
