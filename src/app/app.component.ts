import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <h2>Components</h2>
    `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

