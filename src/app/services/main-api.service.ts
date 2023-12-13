import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MainAPIService {
  private readonly API = 'https://flashcards-java-api-277848877d0d.herokuapp.com/api';
  private readonly API2 = "https://flashcards-java-api-277848877d0d.herokuapp.com/frequency"
  private readonly API3 = "https://ancient-plains-05271-80493b2e3b65.herokuapp.com/gpt"
  constructor(private http: HttpClient) { }


  public completeWithGPT(prompt: any) {
    const prompt1 = "Explique a expressão '" + prompt + "' de forma simples e resumida, com a tradução em português ";
    const data = {
      "prompt": prompt1
    };

    return this.http.post(this.API3, data, { responseType: 'text' as 'json' });
  }



  public listAllWords(){
    return this.http.get<any>(this.API);

  }

  public updateMemo(id: number){
    return this.http.put(this.API + "/updateMemo/"+id, '');
  }


  public addWords(data: any) {
    return this.http.post<any>(this.API, data);
  }

  public listFrequency(){
    return this.http.get<any>(this.API2)
  }

  public update(){
   return this.http.put<any>(this.API2, '')
  }

  public random(){
    return this.http.get(this.API + "/random")
  }


}
