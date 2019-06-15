import {Component, TemplateRef} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {SearchCriteria} from './search/search-criteria';
import {Subject} from 'rxjs';
import {Trip} from './trip/trip';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PaymentModalComponent} from './payment-modal/payment-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('.5s ease-out', style({opacity: '1'})),
      ])
    ]),
  ],
})
export class AppComponent {

  trips: Subject<Array<Trip>> = new Subject();
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  search(searchCriteria: SearchCriteria) {
    const trips: Array<Trip> = new Array(searchCriteria.target.length)
      .fill(undefined)
      .map(item => new Trip(searchCriteria.target))
      .sort((a, b) => a.price - b.price);

    this.trips.next(trips);
  }

  onBuy() {
    this.modalRef = this.modalService.show(PaymentModalComponent);
  }

  trackByTrip(index: number, trip: any) {
    return trip;
  }

}
