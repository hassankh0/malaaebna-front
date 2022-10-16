import { Time } from '@angular/common';
import { Hour, Reservation } from './../modules/reservation';
import { Terrain } from './../modules/terrain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private title: String = 'malaaebna';
  private terrains: Terrain[] = [];
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) { }

  public fetchTerrains() {
    // this.terrains = [
    //   new Terrain(1, "terrain-1", 10, "Calais","../../../assets/foot.png"),
    //   new Terrain(2, "terrain-2", 15, "Boulogne","../../../assets/foot.png"),
    //   new Terrain(3, "terrain-3", 20, "Lille", "../../../assets/foot.png"),
    //   new Terrain(4, "terrain-4", 20, "Lille", "../../../assets/foot.png"),
    //   new Terrain(5, "terrain-5", 20, "Lille", "../../../assets/foot.png")
    // ];

    this.http.get(`http://127.0.0.1:5000/terrains`)
      .subscribe((data: any) => {
        data.data.map((d: any) => {
          let terrain: Terrain = new Terrain(d.id, d.name, d.Tarif, d.Adress, d.image);
          this.terrains.push(terrain);
        });
      });
    console.log(this.terrains);
  }

  public fetchReservations() {
    // this.reservations = [
    //   new Reservation(1, 1, "hassan", "0613172014", new Date('2022-10-12T14:00:00'), new Date('2022-10-12T15:00:00')),
    //   new Reservation(2, 2, "atwe", "0613172014", new Date('2022-10-12T14:00:00'), new Date('2022-10-12T15:00:00'))
    // ];
    this.http.get('http://127.0.0.1:5000/resevations')
      .subscribe((data: any) => {
        data.data.map((d: any) => {
          let reservation: Reservation = new Reservation(d.id, d.terrain_id, d.nomPers, d.phone, new Date(d.DateStart), new Date(d.DateEnd));
          this.reservations.push(reservation);
          // console.log(reservation);
        });
      });
    console.log(this.reservations);
  }
  public getTitle(): String {
    return this.title;
  }
  public getTerrains(): Terrain[] {
    return this.terrains;
  }
  public getReservations(): Reservation[] {
    return this.reservations;
  }
  public getTerrainById(id: number): Terrain {
    for (let index = 0; index < this.terrains.length; index++) {
      const element = this.terrains[index];
      if (element.id == id) {
        return element;
      }
    }
    return null
  }
  public makeReservation(r: Reservation, t: Terrain) {
    return this.http.post<any>('http://127.0.0.1:5000/resevations', {
      "nomPers": r.nomPers,
      "DateStart": r.startTime,
      "DateEnd": r.endTime,
      "phone": r.phone,
      "terrain_id": t.id,
      "terrain_nom": t.nom,
      "terrain_adrs": t.adresse
    }).subscribe({
      next: data => {
        r.id = data.id;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}
