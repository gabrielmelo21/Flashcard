import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent{



  selectedOption: string | null = 'home';

  selectOption(option: string) {
    this.selectedOption = option;
  }


}
