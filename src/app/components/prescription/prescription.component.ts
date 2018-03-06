import { Component, OnInit } from '@angular/core';
import { PrescriptionService, IMessage } from './../../prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  message: IMessage = {};

  constructor(private prescriptionService: PrescriptionService) { }

  sendEmail(message: IMessage) {
    this.prescriptionService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
  }

}
