import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

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
}
