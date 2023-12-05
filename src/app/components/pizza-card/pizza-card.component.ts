import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/service/pizza.service';
import { PizzaState } from '../../state/pizza-state';
import { NavigationService } from '../../service/navigation.service';
import { CartState } from '../../state/cart-state';
import { PizzaDetailService } from '../../service/pizza-detail.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css'],
})
export class PizzaCardComponent implements OnInit {
  constructor(
    protected pizzaService: PizzaService,
    protected pizzaState: PizzaState,
    protected navigationService: NavigationService,
    protected cartState: CartState,
    protected pizzaDetailService: PizzaDetailService
  ) {}

  ngOnInit() {
    this.pizzaService.getPizza();
  }
}
