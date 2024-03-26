import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string){
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  // @Input({
  //   // alias:'abacaxi' apelido que pode usar para propriedade, ex, inputName
  //   required: true,
  //   transform:toUpperCase
  // }) public inputName = 'Sem dados'

  public name = signal('Sem dados')

  @Input({
    required: true,
    transform:toUpperCase
  }) set inputName(value: string){
    this.name.set(value);
  }
}
