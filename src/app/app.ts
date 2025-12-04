import { Component, HostListener } from '@angular/core';
import { Adder } from './components/adder/adder';
import { Subtractor } from './components/subtractor/subtractor';
import { Multiplier } from './components/multiplier/multiplier';
import { Divider } from './components/divider/divider';
import { Info } from './components/info/info';
import { StatsService } from './services/stats';

@Component({
  selector: 'app-root',
  imports: [Adder, Subtractor, Multiplier, Divider, Info],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Arithmo-Dashboard';

  constructor(private statsService: StatsService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.statsService.registerGlobalClick();
  }
}
