import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-expression-generator',
  templateUrl: './expression-generator.component.html',
  styleUrls: ['./expression-generator.component.css']
})
export class ExpressionGeneratorComponent  {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      ingles: ['', Validators.required],
      portugues: ['', Validators.required],
      explain: ['']
    });
  }

  onSubmit() {
    // Lógica para salvar os dados aqui
    console.log(this.formulario.value);
  }


}
