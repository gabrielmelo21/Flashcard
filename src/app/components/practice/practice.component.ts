import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {MainAPIService} from "../../services/main-api.service";
interface ApiResponse {
  id: number;
  english: string;
  portugues: string;
  explain: string;
  memorizeTimes: number;
}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  verResposta: boolean = false;
  id: number | null = null;
  english: string | null = null;
  portuguese: string | null = null;
  explain: string | null = null;
  memorizeTimes: number | null = null;


  constructor(private mainAPI: MainAPIService) {
    this.getRandomWord();
  }

  public verResp(){
    this.verResposta = true;
  }

// No seu código, utilize a interface na função map
  public getRandomWord() {
    this.mainAPI.random().pipe(
      map((resp: Object) => {
        // Faça uma conversão de tipo para ApiResponse
        const apiResponse: ApiResponse = resp as ApiResponse;

        // Agora TypeScript sabe que 'apiResponse' tem a estrutura da interface ApiResponse
        this.id = apiResponse.id;
        this.english = apiResponse.english;
        this.portuguese = apiResponse.portugues;
        this.explain =  apiResponse.explain;
        this.memorizeTimes = apiResponse.memorizeTimes;
      })
    ).subscribe();
  }

}
