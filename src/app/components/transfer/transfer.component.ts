import { Component, OnInit } from '@angular/core';
import { TransferService, IMessage } from '../../transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
    transfer: IMessage = {};

  constructor(private transferService: TransferService) { }

    transferEmail(refill: IMessage) {
        this.transferService.transferEmail(refill).subscribe(res => {
            console.log('AppComponent Success', res);
        }, error => {
            console.log('AppComponent Error', error);
        });
    }

  ngOnInit() {
  }

}
