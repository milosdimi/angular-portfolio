import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('scrollHintAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(12px)' }),
        ),
      ]),
    ]),
  ],
})
export class HeroComponent {
  showScrollHint = true;

  @HostListener('window:mousemove', ['$event'])
  onWindowMove(e: MouseEvent) {
    const hero = document.querySelector('.hero') as HTMLElement;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty('--mx', `${x}px`);
    hero.style.setProperty('--my', `${y}px`);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 20) {
      this.showScrollHint = false;
    }
  }
}
