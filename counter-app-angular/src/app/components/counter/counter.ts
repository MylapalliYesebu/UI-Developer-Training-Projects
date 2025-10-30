import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',  
  styleUrls: ['./counter.css']   
})
export class CounterComponent {
  value: number = 0;  
  step: number = 1;

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value -= this.step;
  }

  reset() {
    this.value = 0;
  }

  setStep(newStep: string) {
    const parsed = Number(newStep);
    this.step = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }
}
