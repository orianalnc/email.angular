import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../servives/informacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public _is:InformacionService ) { }

  ngOnInit() {
  }

}
