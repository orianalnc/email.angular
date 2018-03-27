import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { app_routing } from './app.routes';
import { InformacionService } from './servives/informacion.service';
import { PrescriptionService } from './prescription.service';
import { TransferService } from './transfer.service';
import { ContactService } from './contact.service';
import { RefillService } from './refill.service';
import { HeaderService } from './header.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { RefillComponent } from './components/refill/refill.component';
import { ServicesComponent } from './components/services/services.component';
import { TransferComponent } from './components/transfer/transfer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    PrescriptionComponent,
    PrivacyComponent,
    RefillComponent,
    ServicesComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      app_routing,
      RouterModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBwUYfy08D_pxNo1l-OV4t5fHWRzoyoVRs'
      })
  ],
  providers: [
      InformacionService,
      PrescriptionService,
      RefillService,
      TransferService,
      ContactService,
      HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
