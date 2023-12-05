import { Component } from '@angular/core';
import { CartState } from '../../state/cart-state';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(protected cartService:CartService,protected cartState:CartState){}


}
