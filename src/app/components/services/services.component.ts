import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../servives/informacion.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( public _is:InformacionService) { }

  ngOnInit() {
  }

}
