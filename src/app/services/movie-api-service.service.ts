import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  readonly MOVIE_URL = 'https://api.themoviedb.org/3/search/multi/';
  readonly API_KEY = 'db90fe7f5c36038cce9bc73ded5d5167';

  constructor(private httpClient: HttpClient) { }

  get(query: string){
    return this.httpClient.get<any>(`${this.MOVIE_URL}?api_key=${this.API_KEY}&query=${query}`).toPromise();
  }

}
