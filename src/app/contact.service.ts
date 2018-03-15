import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface CMessage {
    name?: string;
    last?: string;
    email?: string;
    message?: string;
}

@Injectable()
export class  ContactService  {
    private emailUrl = '/assets/data/enviar.php';

    constructor( private http: Http) { }

    contactEmail(contacts: CMessage): Observable<CMessage> | any {
        return this.http.post(this.emailUrl, contacts)
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

