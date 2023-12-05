import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza_model';

@Injectable({
  providedIn: 'root',
})
export class PizzaState {
  pizzas: Pizza[] = []; // repository
  placeholders = [1,2,3,4,5,6,7,8]
  isVisible:boolean=true
  isButtonVisible:boolean=false

  initialize(pizzas: Pizza[]) {
    this.pizzas = pizzas;
  }

  deletePizza(id: number) {
    this.pizzas = this.pizzas.filter((user) => user.id !== id);
  }
}
