import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface RefillMessage {
    first?: string;
    last?: string;
    email?: string;
    phone?: string;
    rx?: string;
    message?: string;
}

@Injectable()
export class RefillService {
    private emailUrl = '../assets/data/refill.php';

    constructor( private http: Http) { }

    refilEmail(refill: RefillMessage): Observable<RefillMessage> | any {
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
