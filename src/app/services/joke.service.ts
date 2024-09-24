import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoke } from '../models/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http:HttpClient) {}

  getJoke(): Observable<IJoke>{
    return this.http.get<IJoke>(this.url);
  }
}
