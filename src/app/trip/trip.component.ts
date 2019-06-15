import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Trip} from './trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() public trip: Trip;

  @Output() buy = new EventEmitter<any>();

  @ViewChild('placeholder') placeholderElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  hidePlaceholder() {
    this.placeholderElement.nativeElement.remove();
  }

  onBuy() {
    this.buy.emit();
  }
}
