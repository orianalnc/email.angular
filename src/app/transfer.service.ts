import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
    first?: string;
    last?: string;
    email?: string;
    phone?: string;
    pharmacyName?: string;
    pharmacyPhone?: string;
    rx?: string;
    drName?: string;
    drPhone?: string;
    message?: string;
}

@Injectable()
export class TransferService {
    private emailUrl = '/assets/data/transfer.php';

    constructor( private http: Http) { }

    transferEmail(refill: IMessage): Observable<IMessage> | any {
        return this.http.post(this.emailUrl, refill)
            .map(response => {
                console.log('Sending email was successfull', response);
                return response;
            })
            .catch(error => {
                console.log('Sending email got error', error);
                return Observable.throw(error);
            });
    }

}
