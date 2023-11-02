import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyslagsComponent} from "./components/myslags/myslags.component";
import {DownloadAppComponent} from "./components/download-app/download-app.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },

  { path: 'slangs', component: MyslagsComponent },
  { path: 'download', component: DownloadAppComponent },

  // Outras rotas ou configurações aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
