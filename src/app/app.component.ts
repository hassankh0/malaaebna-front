import { MainService } from './services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private mainSrv:MainService){}

  ngOnInit() {
    this.mainSrv.fetchTerrains();
    this.mainSrv.fetchReservations();
    console.log(this.mainSrv.getTerrains());
    console.log(this.mainSrv.getReservations());
  }

}
