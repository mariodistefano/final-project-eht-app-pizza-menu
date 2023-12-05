import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { CartState } from './state/cart-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-eht';
  constructor(public cartService:CartService,public cartState:CartState){

  }
}
