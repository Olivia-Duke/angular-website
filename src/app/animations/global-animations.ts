import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const componentEnterAnimation = animation([
  style({transform: 'translateY(100%)', opacity: 0}),
  animate('350ms', style({transform: 'translateY(50%)', opacity: 1}))
]);

export const componentEnterTrigger = trigger('componentEnter', [
  transition(':enter', [
    useAnimation(componentEnterAnimation)
  ])
]);
