import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
  texto:string = "";
  source:string = "";
  target:string = "";
  textoTraducido:string = "";
  
  constructor(private translateService: TranslateService){

  }

  obtenerLenguajes(){
    this.translateService.getLanguajes().subscribe(
      (data:any) => {
      console.log(data);//data va a tener el lenguaje
      },
      (error:any) => {
        console.log(error);
      } 
    )
  }

  traducirTexto(){
    this.translateService.translateText(this.source, this.target, this.texto).subscribe(
      (result: any) => {
        console.log(result); //data va a tener la traduccion aqui
        this.textoTraducido = result.data.translations[0].translateText;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}
