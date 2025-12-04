import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService } from '../../services/stats';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.html',
  styleUrl: './divider.css',
})
export class Divider {
  countA: number = 0;
  countB: number = 0;

  constructor(private statsService: StatsService) {}

  get result(): number {
    if (this.countB === 0) {
      return 0;
    }
    return this.countA / this.countB;
  }

  incrementA(): void {
    this.countA++;
    this.updateService();
  }

  incrementB(): void {
    this.countB++;
    this.updateService();
  }

  private updateService(): void {
    this.statsService.notifyOperation('Divider', this.result);
  }
}
