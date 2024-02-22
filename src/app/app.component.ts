import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
    <h1>Curso de Angular</h1>
    <h2>Template</h2>
    <h3>Text Interpolation</h3>
    `
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

