import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<{ text: String, date: Date }>();
  searchText: String = "";
  searchDate: String;
  searchTime: String;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchEvent.emit({ text: this.searchText, date: new Date(this.searchDate + "T" + this.searchTime) });
    this.searchDate = "";
    this.searchText = "";
    this.searchTime = "";
  }
}
