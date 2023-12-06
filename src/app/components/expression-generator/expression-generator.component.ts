import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MainAPIService} from "../../services/main-api.service";
import {catchError, finalize, tap} from "rxjs";

@Component({
  selector: 'app-expression-generator',
  templateUrl: './expression-generator.component.html',
  styleUrls: ['./expression-generator.component.css']
})
export class ExpressionGeneratorComponent  {
  formulario: FormGroup;
  buttonGPT: boolean = false;
  isLoading: boolean = false;


  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private mainAPI: MainAPIService) {
    this.formulario = this.formBuilder.group({
      english: ['', Validators.required],
      portugues: ['', Validators.required],
      explain: ['']
    });

  }


  public verify_button_completeWithGPT() {
    const englishControl = this.formulario.get('english');

    if (englishControl) {
      const englishExpression = englishControl.value;
      this.buttonGPT = !!englishExpression; // Ativa o botão se houver algum conteúdo em 'englishExpression'

    } else {
      this.buttonGPT = false;
    }
  }

  public completeGPT() {
    const englishControl = this.formulario.get('english');
    const explainControl = this.formulario.get('explain');

    if (englishControl) {
      const englishExpression = englishControl.value;


      this.isLoading = true;

      this.mainAPI.completeWithGPT(englishExpression)
        .pipe(
          tap((response) => {

            console.log('Resposta do servidor:', response);

            if (explainControl) {
              explainControl.setValue(response);
            }
          }),
          catchError((error) => {
            console.error('Erro na chamada API:', error);
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


  onSubmit() {

    this.mainAPI.addWords(this.formulario.value).subscribe(

      response => {
        console.log(response);
        this.formulario.reset();
        this.openSnackBar("Dados enviados com Sucesso!", "close");
      },

      error => {
        console.error('Erro ao enviar a mensagem:', error);
        this.openSnackBar("Erro ao enviar.", "close");
      }


    );

    this.mainAPI.update().subscribe();
  }


}
