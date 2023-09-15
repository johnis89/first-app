import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    NgOptimizedImage,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" ngSrc="../assets/logo.svg" height="44" width="151" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
