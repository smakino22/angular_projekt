import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService } from '../../services/stats';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  constructor(public statsService: StatsService) {}
}
