import { Time } from "@angular/common";

export class Reservation {
  public id: Object;
  public terrainId: String;
  public nomPers: String;
  public phone: String;
  public startTime: Date;
  public endTime: Date;

  constructor(_id: String, _terrainId: String, _nomPers: String, _phone: String, _startTime: Date, _endTime: Date) {
    this.id = _id;
    this.terrainId = _terrainId;
    this.nomPers = _nomPers;
    this.phone = _phone;
    this.startTime = _startTime;
    this.endTime = _endTime;

  }
}

export class Hour {
  public hour: number;
  public minute: number;

  constructor(h: number, m: number) {
    this.hour = h;
    this.minute = m;
  }
}
