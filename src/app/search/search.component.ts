import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchCriteria} from './search-criteria';

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
    const criteria = {target: '12'};
    this.onSearch(criteria);
  }

  onSearch(searchCriteria: SearchCriteria) {
    this.search.emit(searchCriteria);
  }

}
