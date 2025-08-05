import { Component, inject, effect } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavComponent } from './shared/components/navigation/navigation.component';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  private titleService = inject(Title);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.snapshot.root;
        this.setTitleFromRoute(currentRoute);
      });
  }

  private setTitleFromRoute(route: any): void {
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }
    const title = child.data?.['title'];
    if (title) {
      this.titleService.setTitle(title);
    }
  }
}
