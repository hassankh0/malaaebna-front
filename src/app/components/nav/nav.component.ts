import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title:String='';

  constructor(private mainSrv:MainService) { }

  ngOnInit(): void {
    this.title = this.mainSrv.getTitle();
  }

}
