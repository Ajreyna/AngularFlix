import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  readonly API_URL = 'https://ce-authenticated-backend.herokuapp.com/publicapi/movies';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get<any>(this.API_URL).toPromise();
  }

  post(data: any){
    return this.httpClient.post(this.API_URL, data).toPromise();
  }
}
