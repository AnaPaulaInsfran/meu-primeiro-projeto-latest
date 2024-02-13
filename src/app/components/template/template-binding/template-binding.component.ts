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

  //método
  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

}
