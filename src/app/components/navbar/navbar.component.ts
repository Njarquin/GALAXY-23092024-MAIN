import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
