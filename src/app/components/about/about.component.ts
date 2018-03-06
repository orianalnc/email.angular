import { Component, OnInit } from '@angular/core';
import { InformacionService} from '../../servives/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public  _is:InformacionService ) { }

  ngOnInit() {
  }

}
