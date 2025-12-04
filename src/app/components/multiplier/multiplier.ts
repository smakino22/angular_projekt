import { Component } from '@angular/core';
import { StatsService } from '../../services/stats';

@Component({
  selector: 'app-multiplier',
  standalone: true,
  imports: [],
  templateUrl: './multiplier.html',
  styleUrl: './multiplier.css',
})
export class Multiplier {
  countA: number = 0;
  countB: number = 0;

  constructor(private statsService: StatsService) {}

  get result(): number {
    return this.countA * this.countB;
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
    this.statsService.notifyOperation('Multiplier', this.result);
  }
}
