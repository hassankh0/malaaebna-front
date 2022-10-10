import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private title: String = 'malaaebna';

  constructor() { }

  public getTitle():String {
    return this.title;
  }
}
