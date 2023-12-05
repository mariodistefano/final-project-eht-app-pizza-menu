import { Component } from '@angular/core';
import { Pizza } from '../../../models/pizza_model';
import { PizzaDetailState } from '../../../state/pizza-detail-state';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
})
export class PizzaDetailComponent {
  constructor(protected pizzaDetailState: PizzaDetailState) {}
}
