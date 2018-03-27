import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../servives/informacion.service';
import {HMessage, HeaderService} from '../../header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    header: HMessage = {};

  constructor( public _is:InformacionService,
               private headerService: HeaderService) { }

    headerEmail(message: HMessage) {
        this.headerService.headerEmail(message).subscribe(res => {
            console.log('AppComponent Success', res);
        }, error => {
            console.log('AppComponent Error', error);
        });
    }

  ngOnInit() {
  }

    submitted = false;

    onSubmit() { this.submitted = true; }

}
