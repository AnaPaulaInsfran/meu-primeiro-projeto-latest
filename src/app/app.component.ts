import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  // styleUrls: ['./components/new-component/new-component.component.scss'],
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `
  // ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <!-- Antigo: <app-new-component></app-new-component> -->
    <app-new-component/>
    `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

