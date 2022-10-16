import { Terrain } from 'src/app/modules/terrain';
import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/modules/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  id: number;
  terrain: Terrain;
  nom:String;
  prenom:String;
  telephone:String;
  debut:Date;
  fin:Date;



  constructor(private mainSrv: MainService, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
    });
    this.terrain = this.mainSrv.getTerrainById(this.id);
  }

  ngOnInit(): void {

  }

  goHome() {
    this._router.navigate(["/"]);
  }

  reserve() {
    this.mainSrv.makeReservation(new Reservation(0, this.terrain.id, `${this.nom} ${this.prenom}`, this.telephone,this.debut, this.fin),this.terrain);
    this.goHome();
  }

}
