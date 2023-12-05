import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  currentPath: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath =
          this.getNestedRoute(this.activatedRoute).snapshot.routeConfig?.path ||
          '';
      });
  }

  private getNestedRoute(route: ActivatedRoute): ActivatedRoute {
    let nestedRoute = route;
    while (nestedRoute.firstChild) {
      nestedRoute = nestedRoute.firstChild;
    }
    return nestedRoute;
  }


}
