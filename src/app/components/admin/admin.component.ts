import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [MatTabsModule],
  providers: [AdminService],
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrl: 'admin.component.scss',
})
export class AdminComponent {
  constructor(private readonly service: AdminService) {}
}
