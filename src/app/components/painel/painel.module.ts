import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  exports: [PainelComponent]
})
export class PainelModule { }
