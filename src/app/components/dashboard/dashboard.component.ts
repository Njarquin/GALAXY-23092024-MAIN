import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { IJoke } from '../../models/joke.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy, OnChanges {

  jokeValue!: string;
  jokeIcon!: string;
  loading = true;
  subscriptions = new Subscription();
  @Input() categoria!: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(){
    this.subscriptions.add(this.jokeService.getJoke(this.categoria).subscribe((joke: IJoke) => {
      this.jokeValue = joke.value;
      this.jokeIcon = joke.icon_url;
      this.loading = false;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getJoke();
  }
}
