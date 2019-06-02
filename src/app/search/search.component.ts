import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSearch(form: NgForm) {
    this.search.emit(form.value);
  }

}
