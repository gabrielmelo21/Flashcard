import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }


  list(): { nome: string; id: string; sobrenome: string }[]{
    return [{id: "1", nome: "Gabriel", sobrenome: "Melo"}];
  }
}
