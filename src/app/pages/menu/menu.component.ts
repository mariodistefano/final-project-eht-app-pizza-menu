import { Component } from '@angular/core';
import { CartState } from '../../state/cart-state';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(
    protected cartState: CartState,
    protected cartService: CartService
  ) {}
}
