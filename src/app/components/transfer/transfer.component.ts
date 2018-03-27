import { Component, OnInit } from '@angular/core';
import { TransferService, TMessage } from './../../transfer.service';




@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
    transfer: TMessage = {};

  constructor(private transferService: TransferService) { }


    transferEmail(message: TMessage) {
        this.transferService.transferEmail(message).subscribe(res => {
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
