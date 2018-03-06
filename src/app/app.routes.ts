

import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    PrescriptionComponent,
    RefillComponent,
    TransferComponent,
    PrivacyComponent,
} from './components/index.paginas';

const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'prescription', component: PrescriptionComponent },
    { path: 'refill', component: RefillComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const app_routing = RouterModule.forRoot(app_routes,{ useHash:true });
