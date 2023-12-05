import { Injectable } from '@angular/core';
import { CartState } from '../state/cart-state';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(protected cartstate:CartState) { }

  setCartVisible(){
    this.cartstate.setCartVisible();
  }
  Buy() {
      location.replace('/')
    }
}
