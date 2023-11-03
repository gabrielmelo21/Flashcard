import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {MainAPIService} from "../../services/main-api.service";
import {map, Observable} from "rxjs";

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
export class MyslagsComponent  {
  public listWords$: Observable<any> | undefined;

  constructor(private mainAPI: MainAPIService) {
    this.listWords();

  }


  public listWords(){
    this.listWords$ = this.mainAPI.listAllWords().pipe(
      map(resp => {
          return resp;
      })

    );
  }



}
