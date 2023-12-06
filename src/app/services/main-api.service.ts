import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MainAPIService {
  private readonly API = 'http://localhost:8085/api';
  private readonly API2 = "http://localhost:8085/frequency"
  private readonly API3 = "http://localhost:8085/gpt/completeWithGPT"
  constructor(private http: HttpClient) { }


  public completeWithGPT(prompt: any) {
    const prompt1 = "Explique a expressão " + prompt;
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
