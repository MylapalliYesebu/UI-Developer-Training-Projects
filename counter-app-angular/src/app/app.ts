import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter'; // import your CounterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CounterComponent]   // make Angular aware of your Counter component
})
export class App {
  title = 'counter-app-angular';
}
