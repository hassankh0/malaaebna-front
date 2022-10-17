import { Reservation } from './../modules/reservation';
import { MainService } from './../services/main.service';
import { Terrain } from './../modules/terrain';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation'
})
export class SearchReservationPipe implements PipeTransform {
  reservations: Reservation[] = [];

  constructor(private mainSrv: MainService) {
    this.reservations = mainSrv.getReservations();
  }
  checkReservation = (terrainId: String) => {
    var status = false;
    var ids=[];
    this.reservations.forEach(reservation => {
      ids.push(reservation.terrainId);
    });
    return ids;
  }
  transform(list: Terrain[], searchText: String, searchdate: Date): Terrain[] {

    if (!searchText && !searchdate) {
      return list;
    }
    if (isNaN(searchdate.getTime())) {
      return list.filter(item => {
        if (item.nom) {
          return item.nom.toLocaleLowerCase().includes(searchText.toLowerCase()) || item.type.toLocaleLowerCase().includes(searchText.toLowerCase()) ;
        }
      });
    }
    else {
      var range: Terrain[] = [];
      list.filter(item => {
        this.reservations.forEach(reservation => {
          if (reservation.terrainId == item.id) {
            if(!(searchdate.getTime() <= reservation.endTime.getTime() && searchdate.getTime() >= reservation.startTime.getTime())){
              range.push(item);
            }
          }
        });
      });
      var ids = [];
      this.reservations.forEach(reservation => {
        ids.push(reservation.terrainId);
      });
      list.forEach(element =>{
        if(!ids.includes(element.id)){
          if (!range.includes(element)) {
            range.push(element);
          }
        }
      })
      return range.filter(item => {
        if (item.nom) {
          return item.nom.toLocaleLowerCase().includes(searchText.toLowerCase());
        }
      });
    }
  }
}
