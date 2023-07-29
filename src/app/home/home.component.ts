import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('wordAnimation', [
      state('out', style({
        transform: 'rotateX(90deg)',
        opacity: 0
      })),
      state('in', style({
        transform: 'rotateX(0)',
        opacity: 1
      })),
      transition('in => out', animate('0.32s cubic-bezier(0.6, 0, 0.7, 0.2)')),
      transition('out => in', animate('0.38s ease'))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  animationState: 'frontend' | 'backend' = 'frontend'; // Initially set to 'frontend'
  private intervalSubscription!: Subscription; // Use definite assignment assertion

  ngOnInit() {
    // Start the interval and continuously toggle the animation
    this.intervalSubscription = interval(2000) // Adjust the interval time (in milliseconds) as needed
      .subscribe(() => {
        this.toggleAnimation();
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the interval to avoid memory leaks
    this.intervalSubscription.unsubscribe();
  }

  toggleAnimation() {
    this.animationState = this.animationState === 'frontend' ? 'backend' : 'frontend';
  }
}
