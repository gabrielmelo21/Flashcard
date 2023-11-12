import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {MainAPIService} from "../../services/main-api.service";

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent {
  public listFrequency$: Observable<any> | undefined;

  constructor(private mainAPI: MainAPIService) {
    this.listFrequency()

  }


  public listFrequency(){
    this.listFrequency$ = this.mainAPI.listFrequency();
  }




}
