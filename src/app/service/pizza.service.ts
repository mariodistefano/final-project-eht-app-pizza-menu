import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza_model';
import { PizzaState } from '../state/pizza-state';
import { ActivatedRoute } from '@angular/router';
import { CartState } from '../state/cart-state';
import { PizzaDetailState } from '../state/pizza-detail-state';
import { PizzaDetailService } from './pizza-detail.service';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(
    public http: HttpClient,
    protected pizzaState: PizzaState,
    public route: ActivatedRoute,
    protected cartState: CartState,
    protected pizzaDetailState: PizzaDetailState,
    protected pizzaDetailService: PizzaDetailService
  ) {}

  getPizza() {
    return this.http
      .get<Pizza[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((res) => {
        this.pizzaState.pizzas = res;
        this.pizzaState.isVisible = false;
      });
  }

  deletePizza(id: number) {
    this.http
      .delete(
        `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
      )
      .subscribe(() => {
        this.pizzaState.pizzas = this.pizzaState.pizzas.filter(
          (item) => item.id !== id
        );
      });
  }

  postPizzaInCart(pizza: Pizza) {
    this.cartState.addPizzaInCart(pizza);
  }
  removePizzaFromCart(pizza: Pizza) {
    this.cartState.removePizzaFromCart(pizza);
  }

}
