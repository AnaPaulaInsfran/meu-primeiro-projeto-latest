import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  //propriedade
  public name = 'Ana Insfran';
  public age = 35;
  public condition = this.age < 1 ? "Teste" : "Teste2";
  public isDisabled = false;
  public srcValue =
    'https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-1080x675.jpg';

  // constructor(){
  //   setTimeout( () => {
  //     this.name = "Graziela"
  //   },1000)
  // }

  public isTextDecoration = this.age >= 35 ? 'underline' : 'none';
  //método
  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
