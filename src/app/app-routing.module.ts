import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyslagsComponent} from "./components/myslags/myslags.component";
import {HomeComponent} from "./components/home/home.component";
import {ExpressionGeneratorComponent} from "./components/expression-generator/expression-generator.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  { path: 'slangs', component: MyslagsComponent },
  { path: 'expressionGenerator', component: ExpressionGeneratorComponent },

  // Outras rotas ou configurações aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
