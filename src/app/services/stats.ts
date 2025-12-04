import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  // Global Stats
  public totalClicks$ = new BehaviorSubject<number>(0);
  public globalSum$ = new BehaviorSubject<number>(0);
  public averageTime$ = new BehaviorSubject<number>(0); // Represents "Time Since Last Click"

  // Internal State
  private componentValues: { [key: string]: number } = {
    'Adder': 0,
    'Subtractor': 0,
    'Multiplier': 0,
    'Divider': 0
  };

  private lastClickTime: number = 0;

  constructor() {}

  /**
   * Called by the global document listener (App Component).
   * Handles Time Updates and Total Click Count.
   */
  registerGlobalClick() {
    const now = Date.now();
    
    // 1. Update "Time Since Last Click"
    // If this is NOT the first click (lastClickTime is set), calculate diff
    if (this.lastClickTime !== 0) {
      const timeDiff = now - this.lastClickTime;
      this.averageTime$.next(timeDiff);
    }
    // Always update timestamp for the "start" of the next interval
    this.lastClickTime = now;

    // 2. Update Total Clicks
    const currentClicks = this.totalClicks$.value;
    this.totalClicks$.next(currentClicks + 1);
  }

  /**
   * Called by operation components to update their specific output value.
   * Only handles Global Sum calculation.
   */
  notifyOperation(componentType: string, newValue: number) {
    if (this.componentValues.hasOwnProperty(componentType)) {
      this.componentValues[componentType] = newValue;
      const sum = Object.values(this.componentValues).reduce((a, b) => a + b, 0);
      this.globalSum$.next(sum);
    }
  }
}
