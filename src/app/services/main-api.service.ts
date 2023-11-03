import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainAPIService {
  private readonly API = 'http://localhost:8081/api';
  constructor(private http: HttpClient) { }

  public listAllWords(){
    return this.http.get<any>(this.API);

  }
  public addWords(data: any) {
    return this.http.post<any>(this.API, data);

  }

}
