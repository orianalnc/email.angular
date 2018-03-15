import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../servives/informacion.service';
import {ContactService, CMessage} from '../../contact.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    contacts: CMessage = {};

  constructor( public  _is:InformacionService,
               private contactService: ContactService ) {}

  anio:number = new Date().getFullYear();

    contactEmail(message: CMessage) {
        this.contactService.contactEmail(message).subscribe(res => {
            console.log('AppComponent Success', res);
        }, error => {
            console.log('AppComponent Error', error);
        });
    }

  ngOnInit() {
  }

}
