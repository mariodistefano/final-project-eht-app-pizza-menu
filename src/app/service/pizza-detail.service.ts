import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza_model';
import { PizzaDetailState } from '../state/pizza-detail-state';

@Injectable({
  providedIn: 'root',
})
export class PizzaDetailService {
  constructor(protected pizzaDetailState: PizzaDetailState) {}

  getPizzaItem(pizza: Pizza) {
    this.pizzaDetailState.pizza = pizza;
  }
}
