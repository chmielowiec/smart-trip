import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {LogoComponent} from './logo/logo.component';
import {TripComponent} from './trip/trip.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {PaymentModalComponent} from './payment-modal/payment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
    TripComponent,
    PaymentModalComponent
  ],
  entryComponents: [
    PaymentModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
