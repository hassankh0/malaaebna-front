import { Terrain } from 'src/app/modules/terrain';
import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  id: String;
  terrain: Terrain;
  constructor(private mainSrv: MainService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
    this.terrain = this.mainSrv.getTerrainById(this.id);
  }

  goHome() {
    this._router.navigate(["/"]);
  }

  reserve() {
    console.log("reserved");
  }

}
