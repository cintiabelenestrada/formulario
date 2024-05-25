import { Component } from '@angular/core';
import { Expediente } from '../../models/expediente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expediente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './expediente.component.html',
  styleUrl: './expediente.component.css'
})
export class ExpedienteComponent {
  expediente: Expediente; //expediente es un objeto que trae los atributos de la clase models
  expedienteList: Array<Expediente>; //expedienteList es un array contiene el objeto Expediente


  constructor(){
    this.expediente = new Expediente();
    this.expedienteList = new Array<Expediente>();
  }

  registrar(): void {
    console.log(this.expediente);
    this.expedienteList.push(this.expediente); //EL push agrega un elemento al array, agrega el expediente, 
    // expedienteList queda en memoria de expediente, referenciado(this.variable-objeto) por la primera posicion del array
    // si no pongo esta linea no se guardan los valores
    this.expediente = new Expediente(); //se tiene que reiinicializo para que se rompa la referencia de variable expediente
    // la referencia expediente apunta a otro objeto en memoria aparte del anterior que se guardo, y va almacenar el nuevo expediente cargado
    // si no pongo esta ultima linea se sobre escriben los valores cargados, xq no inicializa la variable
  }

}
