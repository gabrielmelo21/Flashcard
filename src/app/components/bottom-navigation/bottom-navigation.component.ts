import {Component} from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css']
})
export class BottomNavigationComponent  {

  selectedOption: string | null = 'home'; // Define 'home' como ativo por padrão ao carregar a página

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
