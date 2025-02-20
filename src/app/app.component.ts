import { Component, inject, OnDestroy } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LOGIN } from './consts/routes.consts';
import { SidenavComponent } from './shared/components/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private readonly router = inject(Router);

  subscription = this.router.events.subscribe((event) => {
    if (event.type !== EventType.NavigationStart) return;
    this.shpwSidenav = event.url !== `/${LOGIN}`;
  });

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  title = 'frontend';
  shpwSidenav = true;
}
