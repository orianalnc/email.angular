import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface TMessage {
    first?: string;
    last?: string;
    email?: string;
    phone?: string;
    drName?: string;
    drPhone?: string;
    medication?: string;
    message?: string;
}

@Injectable()
export class TransferService {
    private emailUrl = '/assets/data/transfer.php';

    constructor( private http: Http) { }

    transferEmail(transfer: TMessage): Observable<TMessage> | any {
        return this.http.post(this.emailUrl, transfer)
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
