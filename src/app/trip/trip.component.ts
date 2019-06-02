import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Trip} from './trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() public trip: Trip;

  @ViewChild('placeholder') placeholderElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  hidePlaceholder() {
    this.placeholderElement.nativeElement.remove();
  }
}
