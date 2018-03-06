import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../servives/informacion.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public _is:InformacionService) { }

  ngOnInit() {
  }

}
