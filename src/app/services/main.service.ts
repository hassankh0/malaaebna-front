import { Time } from '@angular/common';
import { Hour, Reservation } from './../modules/reservation';
import { Terrain } from './../modules/terrain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// this is the api token
// f2f315f831306dfe0ac940bc3fa6d6bfccad2322c57bbfc70c995b21c6e40670d69ff7711dc53102ae4773d168a37e7a7101342eef928b0b00a3c86d32dbbebe984ebfb8b2afd41ab5d13188a8430220c4038584c9135f2d389c331cab41136fc73e252d284b1af6925902af5ef50787a61b54a88c28a3307e0199d10172c007
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private title: String = 'malaaebna';
  private terrains:Terrain[] = [];
  private  reservations:Reservation[] = [];

  constructor(private http: HttpClient) { }

  public fetchTerrains() {
    this.terrains = [
      new Terrain("1", "terrain-1", 10, "Calais","../../../assets/foot.png"),
      new Terrain("2", "terrain-2", 15, "Boulogne","../../../assets/foot.png"),
      new Terrain("3", "terrain-3", 20, "Lille", "../../../assets/foot.png"),
      new Terrain("4", "terrain-4", 20, "Lille", "../../../assets/foot.png"),
      new Terrain("5", "terrain-5", 20, "Lille", "../../../assets/foot.png")
    ];
    // const baseURL = 'http://localhost:1337';
    // const qs = require('qs');
    // const query = qs.stringify({
    //   populate: '*',
    // }, {
    //   encodeValuesOnly: true, // prettify URL
    // });
    // this.http.get(`/api/terrains?${query}`)
    //   .subscribe((data: any) => {
    //     console.log(data)
    //     data.data.map((da: any) => {
    //       let d = da.attributes;
    //     console.log(d);
    //       let terrain: Terrain = new Terrain(d.idTerrain, d.nom, d.prix, d.adresse,`${baseURL}${d.photo.data.attributes.url}`);
    //       this.terrains.push(terrain);
    //     });
    //   });
    console.log(this.terrains);
  }

  public fetchReservations() {
    this.reservations = [
      new Reservation("1", "1", "hassan", "0613172014", new Date('2022-10-12T14:00:00'), new Date('2022-10-12T15:00:00')),
      new Reservation("2", "2", "atwe", "0613172014", new Date('2022-10-12T14:00:00'), new Date('2022-10-12T15:00:00'))
    ];
    // this.http.get('/api/reservations')
    //   .subscribe((data: any) => {
    //     data.data.map((da: any) => {
    //       let d = da.attributes;
    //       console.log(d);
    //       let reservation: Reservation = new Reservation(d.idReservation, d.terrainId, d.nomPers, d.phone, new Date(d.startTime), new Date(d.endTime));// new  (d.idTerrain, d.nom, d.prix, d.adresse, "../../../assets/foot.png");
    //       this.reservations.push(reservation);
    //     });
    //   });
      console.log(this.reservations);
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
  public getTerrainById(id:String): Terrain{
    this.terrains.forEach(element => {
      if (element.id == id) {
        return element;
      }
    });
    return undefined;
  }
}
