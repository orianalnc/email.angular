import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../servives/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( public  _is:InformacionService ) {}

  anio:number = new Date().getFullYear();

  ngOnInit() {
  }

}
