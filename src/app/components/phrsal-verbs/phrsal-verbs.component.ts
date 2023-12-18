import { Component } from '@angular/core';
import {MainAPIService} from "../../services/main-api.service";
import {catchError, finalize, tap} from "rxjs";

@Component({
  selector: 'app-phrsal-verbs',
  templateUrl: './phrsal-verbs.component.html',
  styleUrls: ['./phrsal-verbs.component.css']
})
export class PhrsalVerbsComponent {

  phrasalVerb: any;
  isLoading: boolean = false;

  public constructor( private mainAPI: MainAPIService) {
            this.generatePhrsalVerb();
  }


  public generatePhrsalVerb(){
    this.mainAPI.phrasalVerbWithGPT()
      .pipe(
        tap((response) => {

          this.phrasalVerb = response;
          console.log('Resposta do servidor:', response);

        }),
        catchError((error) => {
          console.error('Erro na chamada API:', error);
          throw error;
        }),
        finalize(() => {

          this.isLoading = false;
          console.log('Processamento do servidor concluído.');
        })
      )
      .subscribe();
  }


}
