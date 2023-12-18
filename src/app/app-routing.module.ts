import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExpressionGeneratorComponent} from "./components/expression-generator/expression-generator.component";
import {FrequencyComponent} from "./components/frequency/frequency.component";
import {PracticeComponent} from "./components/practice/practice.component";
import {TradutorComponent} from "./components/tradutor/tradutor.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  { path: 'practice', component: PracticeComponent },
  { path: 'frequency', component: FrequencyComponent },
  { path: 'expressionGenerator', component: ExpressionGeneratorComponent },
  { path: 'tradutor', component: TradutorComponent },

  // Outras rotas ou configurações aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
