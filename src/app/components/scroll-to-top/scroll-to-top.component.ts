import {Component, HostListener} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
  animations: [
    trigger('enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('250ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('250ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )]
})
export class ScrollToTopComponent {

  windowScrolled: boolean;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop(): void {
    document.getElementById('navbar').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  smoothScroll(): void {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 8));
    }
  }
}
