import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoke } from '../models/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  urlCategories = "https://api.chucknorris.io/jokes/categories";
  urlJokes = 'https://api.chucknorris.io/jokes/random?category=';

  constructor(private http:HttpClient) {}

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(this.urlCategories);
  }

  getJoke(categoria: string): Observable<IJoke>{
    return this.http.get<IJoke>(this.urlJokes + categoria);
  }
}
