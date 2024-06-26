import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosIp } from '../../models/datos-ip';
import { Direccion } from '../../models/datosAdress';
import { DireccionIpService } from '../../services/direccionip.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direccion-ip',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './direccionip.component.html',

})
export class DireccionIPComponent {
  direccionIP: string = "";
  datosIp!: DatosIp;
  addressDetails!: Direccion;
  constructor(private direccionIpService: DireccionIpService){
  }

  IngresarIp(){
    this.direccionIpService.getDireccionesIP(this.direccionIP).subscribe(
      (data:any) => {
        this.datosIp = new DatosIp(
          data.city, 
          data.country,
          data.latitude,
          data.longitude,
           {
            abbr: data.timezone.abbr,
            date: data.timezone.date,
            id: data.timezone.id,
            name: data.timezone.name,
            offset: data.timezone.offset,
            time: data.timezone.time
          });

        this.datosIp = data;

        console.log(this.datosIp);
        console.log(this.direccionIP);

        this.mostrarDireccion();
      },
      (error:any) => {
        console.log(error);
      } 
    );
  }

  mostrarDireccion() {
    this.direccionIpService.getLatitudeLongitude(this.datosIp.latitude, this.datosIp.longitude).subscribe(
      (data:any) => {
          this.addressDetails = data.Results[0];
          console.log("data: ", JSON.stringify(data));
          console.log("data.Results: ", JSON.stringify(data.Results));
          console.log("data.Results[0]: ", JSON.stringify(data.Results[0]));
        },
      (error:any) => {
        console.log(error);
      } 
    );
  }
}
