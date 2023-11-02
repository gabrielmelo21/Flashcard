import { Component } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  selectedOption: string | null = 'home'; // Define 'home' como ativo por padrão ao carregar a página

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
