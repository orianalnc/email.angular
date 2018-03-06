import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  first_name?: string,
  last_name?: string,
  email?: string,
  phone?: string,
  dr_name?: string,
  dr_phone?: string,
  medication?: string,
  message?: string
}

@Injectable()
export class PrescriptionService {
  private emailUrl = '../../assets/data/email.php';

  constructor( private http: Http) { }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }

}
