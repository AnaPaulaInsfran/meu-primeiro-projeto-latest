import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  // propriedade
  public name = 'Ana Insfran';
  public age = 35;
  public condition = this.age > 1 ? 'Teste' : 'Teste2';
  public isDiabled = true;
  public srcValue =
  'https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-1080x675.jpg';

  public isTextDecoration = this.age >=35 ? 'underline' : 'none';
  // constructor(){
  //   setTimeout( () => {
  //     this.name = "João e Maria";
  //   },1000)
  // }

  // public sum(val1:number, val2:number){
  //   return val1 + val2;
  // }

  public sum(){
    return this.age++;
  }

  public sub(){
    return this.age--;
  }

  public onKeyDown(event:Event) {
    return console.log(event);
  }

  public onMouseMove(event:MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
