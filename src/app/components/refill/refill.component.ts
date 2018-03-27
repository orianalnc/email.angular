import { Component, OnInit } from '@angular/core';
import { RefillService, RefillMessage } from '../../refill.service';

@Component({
    selector: 'app-refill',
    templateUrl: './refill.component.html',
    styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit {
    refill: RefillMessage = {};

    constructor(private refillService: RefillService) { }

    refilEmail(refill: RefillMessage) {
        this.refillService.refilEmail(refill).subscribe(res => {
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
