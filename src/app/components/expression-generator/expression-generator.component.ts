import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MainAPIService} from "../../services/main-api.service";

@Component({
  selector: 'app-expression-generator',
  templateUrl: './expression-generator.component.html',
  styleUrls: ['./expression-generator.component.css']
})
export class ExpressionGeneratorComponent  {
  formulario: FormGroup;


  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private mainAPI: MainAPIService) {
    this.formulario = this.formBuilder.group({
      english: ['', Validators.required],
      portugues: ['', Validators.required],
      explain: ['']
    });

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
  }


}
