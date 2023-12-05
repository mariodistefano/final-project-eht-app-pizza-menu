import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza_model';

@Injectable({
  providedIn: 'root',
})
export class CartState {
  isModalVisible = false;
  cartItemsCount = 0;
  totalPrice: number = 0.0;
  pizzasInCart: Pizza[] = [];
  isDisable: boolean = true;
  pizzaCounts: { [key: string]: number } = {};

  setCartVisible() {
    this.isModalVisible = !this.isModalVisible;
  }

  addPizzaInCart(pizza: Pizza) {
    this.cartItemsCount += 1;
    this.totalPrice = parseFloat((this.totalPrice + pizza.price!).toFixed(2));

    this.isDisable = false;

    if (pizza.name) {
      const pizzaName = pizza.name;
      this.pizzaCounts[pizzaName!] = (this.pizzaCounts[pizzaName] || 0) + 1;

      const existingPizza = this.pizzasInCart.find(
        (item) => item.id === pizza.id
      );
      if (!existingPizza) {
        this.pizzasInCart.push(pizza);

        this.pizzaCounts[pizza.name!] * pizza.price!;
      }
    }
    console.log(this.pizzaCounts);
  }

  removePizzaFromCart(pizza: Pizza) {
    if (pizza.name) {
      const pizzaName = pizza.name;

      this.pizzaCounts[pizzaName!] = Math.max(
        (this.pizzaCounts[pizzaName] || 0) - 1,
        0
      );

      if (this.pizzaCounts[pizzaName!] === 0) {
        this.pizzasInCart = this.pizzasInCart.filter(
          (item) => item.id !== pizza.id
        );
      }

      if (pizza.price! > 0) {
        this.totalPrice = Math.max(
          parseFloat((this.totalPrice - pizza.price!).toFixed(2)),
          0
        );
      }

      this.cartItemsCount = this.pizzasInCart.length;

      this.isDisable = this.pizzasInCart.length === 0;

      if (this.cartItemsCount === 0) {
        this.isModalVisible = false;
      }
    }
  }

  getTotalForPizza(item: Pizza): number {
    return this.pizzaCounts[item.name!] * item.price!;
  }
  getTotalPizza(item: Pizza): number {
    return this.pizzaCounts[item.name!];
  }
}
