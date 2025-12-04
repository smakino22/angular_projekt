import { Component } from '@angular/core';
import { StatsService } from '../../services/stats';

@Component({
  selector: 'app-subtractor',
  standalone: true,
  imports: [],
  templateUrl: './subtractor.html',
  styleUrl: './subtractor.css',
})
export class Subtractor {
  countA: number = 0;
  countB: number = 0;

  constructor(private statsService: StatsService) {}

  get result(): number {
    return this.countA - this.countB;
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
    // Only update the SUM. The global click listener handles the count/time.
    this.statsService.notifyOperation('Subtractor', this.result);
  }
}
