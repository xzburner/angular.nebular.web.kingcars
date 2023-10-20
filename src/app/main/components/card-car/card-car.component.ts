import { Component, Input, OnInit } from '@angular/core';
import { CarModel } from '../../../models/car.model';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit{

  @Input()
  public cars: CarModel[] = []

  constructor() { }

  ngOnInit(): void {
  }
}
