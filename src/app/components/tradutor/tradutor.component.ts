import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MainAPIService} from "../../services/main-api.service";
import {catchError, finalize, tap} from "rxjs";

@Component({
  selector: 'app-tradutor',
  templateUrl: './tradutor.component.html',
  styleUrls: ['./tradutor.component.css']
})
export class TradutorComponent {
  formulario: FormGroup;
  isLoading: boolean = false;
  transalateResponse: Object = "";
  wordToTranslate: any;


  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private mainAPI: MainAPIService) {
    this.formulario = this.formBuilder.group({
      english: ['', Validators.required],
    });

  }







  onSubmit() {

    const englishControl = this.formulario.get('english');


    if (englishControl) {
      const englishExpression = englishControl.value;
      this.wordToTranslate = englishExpression;
      this.isLoading = true;

      this.mainAPI.transalateWithGPT(englishExpression)
        .pipe(
          tap((response) => {

            this.transalateResponse = response;

            this.formulario.reset();
            this.openSnackBar("Palavra/frase traduzida com sucesso", "close");


            console.log('Resposta do servidor:', response);

          }),
          catchError((error) => {
            console.error('Erro na chamada API:', error);
            this.openSnackBar("Erro ao Traduzir, tente novamente", "close");
            throw error;
          }),
          finalize(() => {

            this.isLoading = false;
            console.log('Processamento do servidor concluído.');
          })
        )
        .subscribe();
    }


  }


  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 2500,
    });
  }
}
