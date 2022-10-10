import { Time } from '@angular/common';
import { Hour, Reservation } from './../modules/reservation';
import { Terrain } from './../modules/terrain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private title: String = 'malaaebna';
  private terrains:Terrain[] = [];
  private  reservations:Reservation[] = [];

  constructor() { }

  public fetchTerrains() {
    this.terrains = [
      new Terrain("1", "terrain-1", 10, "Calais","../../../assets/foot.png"),
      new Terrain("2", "terrain-2", 15, "Boulogne","../../../assets/foot.png"),
      new Terrain("3", "terrain-3", 20, "Lille", "../../../assets/foot.png"),
      new Terrain("4", "terrain-4", 20, "Lille", "../../../assets/foot.png"),
      new Terrain("5", "terrain-5", 20, "Lille", "../../../assets/foot.png")
    ];
  }

  public fetchReservations() {
    this.reservations = [
      new Reservation("1", new Date('2022-11-01'), "1", "hassan", "0613172014", new Hour(12, 34), new Hour(13, 34)),
      new Reservation("2", new Date('2022-10-14'), "2", "atwe", "0613172014", new Hour(13, 0), new Hour(15, 0))
    ]
  }
  public getTitle():String {
    return this.title;
  }
  public getTerrains():Terrain[] {
    return this.terrains;
  }
  public getReservations(): Reservation[] {
    return this.reservations;
  }
}
