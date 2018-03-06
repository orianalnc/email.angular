import { Component, OnInit } from '@angular/core';
import { RefillService, IMessage } from './../../refill.service';

@Component({
    selector: 'app-refill',
    templateUrl: './refill.component.html',
    styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit {
    refill: IMessage = {};

    constructor(private refillService: RefillService) { }

    refilEmail(refill: IMessage) {
        this.refillService.refilEmail(refill).subscribe(res => {
            console.log('AppComponent Success', res);
        }, error => {
            console.log('AppComponent Error', error);
        });
    }

    ngOnInit() {
    }

}
