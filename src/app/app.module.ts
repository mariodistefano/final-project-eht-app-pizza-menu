import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from './service/navigation.service';
import { CartComponent } from './components/cart/cart.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { PizzaDetailComponent } from './components/pizza-card/pizza-detail/pizza-detail.component';
// import { provideFirebaseApp, getApp,  } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAzNQGcSOKFoRCK42pF7hteRuWJ-vEVaCQ',
  authDomain: 'finalprojecteht.firebaseapp.com',
  projectId: 'finalprojecteht',
  storageBucket: 'finalprojecteht.appspot.com',
  messagingSenderId: '874741014078',
  appId: '1:874741014078:web:052e6093a0d5df8b967b6f',
  measurementId: 'G-BFLVET8M2S',
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzaCardComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    PizzaDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {


  constructor(public navigationService: NavigationService) {}
}
