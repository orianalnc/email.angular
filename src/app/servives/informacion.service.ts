import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  carga_sobre_services:boolean = false;
  carga_sobre_about:boolean = false;
  services: any[] = [];
  about: any[] = [];


  constructor( public http: Http ) {

      this.carga_info();
      this.carga_services();
      this.carga_about();
  }

  public carga_info(){
      this.http.get("assets/data/info.json")
          .subscribe( data => {
              /*console.log(data.json());*/
              this.cargada = true;
              this.info = data.json();
          });
  }

  public carga_services(){
      this.http.get("https://premier-743oc.firebaseio.com/services.json")
          .subscribe( data => {
              /*console.log(data.json());*/
              this.carga_sobre_services = true;
              this.services = data.json();
          });

  }

  public carga_about(){
      this.http.get("https://premier-743oc.firebaseio.com/about.json")
          .subscribe( data => {
              /*console.log(data.json());*/
              this.carga_sobre_about = true;
              this.about = data.json();
          });

  }

}
