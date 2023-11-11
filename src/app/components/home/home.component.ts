import {Component, ElementRef, ViewChild} from '@angular/core';
import {catchError, finalize, map, Observable, of} from "rxjs";
import {ChatgptService} from "../services/chatgpt.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {MainAPIService} from "../../services/main-api.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent {

  public listWords$: Observable<any> | undefined;

  constructor(private mainAPI: MainAPIService) {
    this.listWords();

  }


  public listWords(){
    this.listWords$ = this.mainAPI.listAllWords().pipe(
      map(resp => {
        return resp.reverse();
      })

    );
  }


}
