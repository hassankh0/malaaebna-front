import { Terrain } from 'src/app/modules/terrain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carditem1',
  templateUrl: './carditem1.component.html',
  styleUrls: ['./carditem1.component.css']
})
export class Carditem1Component implements OnInit {
  @Input() terrain:Terrain;
  constructor() { }

  ngOnInit(): void {
  }

}
