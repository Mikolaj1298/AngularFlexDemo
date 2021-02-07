import {Component, Input, OnInit} from '@angular/core';
import {ApartmentModel} from '../models/Apartment.model';

@Component({
  selector: 'app-vertical-item-list',
  templateUrl: './vertical-item-list.component.html',
  styleUrls: ['./vertical-item-list.component.scss']
})
export class VerticalItemListComponent implements OnInit {
  @Input() itemList: ApartmentModel[];


  constructor() { }

  ngOnInit(): void {
  }

  selectOption(compRef: any): void {

  }
}
