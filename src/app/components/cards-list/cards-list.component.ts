import { Component, OnInit } from '@angular/core';
import { Terrain } from 'src/app/modules/terrain';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  terrains: Terrain[] = [];

  constructor(private mainSrv: MainService) { }

  ngOnInit(): void {
    this.terrains = this.mainSrv.getTerrains();
  }

}
