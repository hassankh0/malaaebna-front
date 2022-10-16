import { Terrain } from './../../modules/terrain';
import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/modules/reservation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  terrains:Terrain[]=[];
  searchText:String = "";
  searchDate:Date = null;
  constructor(private mainSrv:MainService) { }

  ngOnInit(): void {
    this.terrains=this.mainSrv.getTerrains();
  }

  onTerrainSearched(eventData: { text: string, date:Date }) {
    this.searchText = eventData.text;
    this.searchDate = eventData.date;
  }
}
