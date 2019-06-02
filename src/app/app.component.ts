import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {SearchCriteria} from './search/search-criteria';
import {Subject} from 'rxjs';
import {Trip} from './trip/trip';

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

  search(searchCriteria: SearchCriteria) {
    const trips: Array<Trip> = new Array(searchCriteria.target.length)
      .fill(undefined)
      .map(item => new Trip())
      .sort((a, b) => a.price - b.price);

    this.trips.next(trips);
  }

  trackByTrip(index: number, trip: any) {
    return trip;
  }

}
