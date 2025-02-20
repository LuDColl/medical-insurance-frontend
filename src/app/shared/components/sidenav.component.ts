import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ADMIN, HOME } from '../../consts/routes.consts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.scss',
  standalone: true,
  imports: [MatListModule],
})
export class SidenavComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {}

  home = HOME;
  admin = ADMIN;
}
