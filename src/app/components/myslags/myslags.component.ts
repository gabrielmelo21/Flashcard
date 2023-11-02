import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-myslags',
  templateUrl: './myslags.component.html',
  styleUrls: ['./myslags.component.css'],
  animations: [
    // Defina as animações aqui
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MyslagsComponent {

}
