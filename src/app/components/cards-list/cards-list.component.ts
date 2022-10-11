import { Component, OnInit, Input } from '@angular/core';
import { Terrain } from 'src/app/modules/terrain';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  @Input() terrains: Terrain[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
