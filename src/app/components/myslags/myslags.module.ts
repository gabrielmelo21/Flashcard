import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyslagsComponent } from './myslags.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    MyslagsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class MyslagsModule { }
