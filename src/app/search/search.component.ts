import {Component, EventEmitter, Output} from '@angular/core';
import {SearchCriteria} from './search-criteria';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() search = new EventEmitter<any>();

  constructor() {
  }

  onSearch(searchCriteria: SearchCriteria) {
    this.search.emit(searchCriteria);
  }

}
