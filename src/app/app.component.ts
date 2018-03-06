import { Component } from '@angular/core';
import { InformacionService } from './servives/informacion.service';
import { PrescriptionService } from './prescription.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Pharmacy Premier Health 20-07 127th St #G33 College Point, NY 11356-2321';
    lat: number = 40.781348;
    lng: number = -73.841042;

  constructor( public  _is:InformacionService ) { }

}
