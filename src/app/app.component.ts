import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  template: `
  <app-card></app-card>
  <h1>Aula de Services</h1>
  <router-outlet><router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-services';
}
