import { Time } from "@angular/common";

export class Reservation {
  public id: Object;
  public date: Date;
  public terrainId: String;
  public nomPers: String;
  public phone: String;
  public startTime: Hour;
  public endTime: Hour;

  constructor(_id: String, _date: Date, _terrainId: String, _nomPers: String, _phone: String, _startTime: Hour, _endTime: Hour) {
    this.id = _id;
    this.date = _date;
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
