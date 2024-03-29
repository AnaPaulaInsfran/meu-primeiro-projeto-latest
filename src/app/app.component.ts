import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      CommonModule,
      RouterOutlet,
      NewComponent,
      TemplateBindingComponent,
      TemplateVariablesComponent,
      TemplateControlFlowComponent,
      TemplateDeferrableViewsComponent,
      SignalsComponent,
      PaiOuMaeComponent
    ],

    template: `
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow></app-template-control-flow> -->
    <!-- <app-new-component /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->

    <h1>Curso de Angular</h1>

    <app-pai-ou-mae />


    `,
})

export class AppComponent {

}

