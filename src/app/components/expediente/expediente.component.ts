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
  listExpediente: Array<Expediente>; //listExpediente es un array contiene el objeto Expediente


  constructor(){
    this.expediente = new Expediente();
    this.listExpediente = new Array<Expediente>();
  }

  registrar(): void {
    console.log(this.expediente);
    this.listExpediente.push(this.expediente); //EL push agrega un elemento al array, agrega el expediente
    this.expediente = new Expediente(); //se tiene que reiinicializo para que se rompa la referencia de variable expediente
  }

}
