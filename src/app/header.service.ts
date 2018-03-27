import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface HMessage {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

@Injectable()
export class HeaderService {

    private emailUrl = '/assets/data/enviar.php';

    constructor( private http: Http) { }

    headerEmail(header: HMessage): Observable<HMessage> | any {
        return this.http.post(this.emailUrl, header)
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
