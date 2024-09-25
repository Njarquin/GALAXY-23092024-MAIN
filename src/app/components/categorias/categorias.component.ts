import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectionList } from '@angular/material/list';
import { MatListOption } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContent } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { JokeService } from '../../services/joke.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatLabel, MatFormField, MatSelectionList, MatListOption, DashboardComponent, MatSidenavModule, MatDrawer, MatDrawerContent, MatDrawerContainer],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit  {
  categories: string[] = [];
  subscriptions: Subscription = new Subscription();
  hasError: boolean = false;
  selectedOptions: string[] = ['dev'];
  categoriaSeleccionada: string = "dev";

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.subscriptions.add(this.jokeService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
      this.hasError = false;
    }, onerror => {
      this.hasError = true;
    }));
  }

  onNgModelChange(event: any){
    console.log('on ng model change', event[0]);
    this.categoriaSeleccionada = event[0];
  }
}
