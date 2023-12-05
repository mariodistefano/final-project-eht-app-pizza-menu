import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza_model';
import { PizzaDetailService } from '../service/pizza-detail.service';

@Injectable({
  providedIn: 'root',
})
export class PizzaDetailState {

  pizza!:Pizza;
  constructor(
    ){
  }




}
