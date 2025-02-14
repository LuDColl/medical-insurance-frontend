import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  standalone: true,
  imports: [],
  providers: [HomeService],
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent {
  constructor(private readonly service: HomeService) {}
}
