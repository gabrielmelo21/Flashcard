import {Component, ElementRef, ViewChild} from '@angular/core';
import {catchError, finalize, map, Observable, of} from "rxjs";
import {ChatgptService} from "../services/chatgpt.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('input', { static: true }) inputElement!: ElementRef;
  constructor( private chatService: ChatgptService) {}

  response$: Observable<string> | undefined;
  isLoading: boolean = false;
  msgError: boolean = false;

  selectedLanguage: string = "";
  selectedLanguagelbl: string = ""; // Variável para armazenar a mensagem
  isAnimationActive: any;
  mainBlock: any = false;

  onLanguageSelected() {
    this.selectedLanguagelbl = " em " + this.selectedLanguage;

    this.isAnimationActive = true; // Ativa a animação
    setTimeout(() => {
      this.isAnimationActive = false; // Desativa a animação após um tempo
    }, 600); // Tempo de duração da animação em milissegundos

     this.mainBlock = true;

  }

  goBack() {
    this.response$ = undefined;
  }




  getChatResponse(param: string) {
   var prompt = "";
     switch (param){
         case "giria":
         prompt = `ensine apenas 1 giria em ${this.selectedLanguage} em no minimo 2 linhas  e exemplo e explique (sem chill ou piece of cake)`;
         break;

         case "text":
           const valorDoInput = this.inputElement.nativeElement.value;
         prompt = valorDoInput+`  em ${this.selectedLanguage} de exemplo` ;
         break;

         case "expressao":
         prompt = `ensine apenas uma expressão em ${this.selectedLanguage} em no minimo 2 linhas e exemplo`;
         break;

       case "dialogo":
         prompt = `me mostre um diálogo em ${this.selectedLanguage}  e explique `;
         break;



     }


    this.isLoading = true; //quando clico aparece o loading

    this.response$ = this.chatService.getChatResponse2(prompt).pipe(
      map(response => {
        this.isLoading = false; // para loading
        this.msgError = false;
        const content = response.choices[0].message.content;
        return this.sanitizeResponse(content);
      }),
      catchError(error => {
        console.error('Erro na solicitação:', error);
        this.isLoading = false; // para loading
        this.msgError = true;
        return of('Erro ao obter resposta.');
      }),
      finalize( () => this.isLoading = false ),

    );
  }


  private sanitizeResponse(content: string): string {
    // Remova palavras iniciais indesejadas aqui
    const unwantedStartWords = ['claro!', 'certo!', 'ok!', 'entendi!', 'sim!', 'vamos lá!'];
    for (const startWord of unwantedStartWords) {
      if (content.toLowerCase().startsWith(startWord)) {
        content = content.slice(startWord.length).trim();
        break;
      }
    }
    return content;
  }



}
