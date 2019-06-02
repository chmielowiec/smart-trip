import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @ViewChild('placeholder') placeholderElement: ElementRef;

  public price = Math.random() * 500 + 200;
  public signature = Math.random();

  constructor() {
  }

  ngOnInit() {
  }

  hidePlaceholder() {
    this.placeholderElement.nativeElement.remove();
  }
}
