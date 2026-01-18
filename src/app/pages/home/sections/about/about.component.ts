import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('revealLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-60px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('650ms ease-out')),
    ]),
    trigger('revealRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(60px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('650ms ease-out')),
    ]),
  ],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection', { static: true })
  aboutSection!: ElementRef<HTMLElement>;

  inView = false;

  // (optional) Text später easy für EN/DE
  about = {
    title: 'Über mich',
    location: 'Kufstein, Tirol – offen für Remote-Arbeit',
    mindset:
      'Neugierig, offen für neue Technologien und kontinuierliche Weiterentwicklung',
    approach:
      'Analytisch, lösungsorientiert und detailverliebt – mit Fokus auf Qualität, Performance und UX',
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const prefersReduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    if (prefersReduced) {
      this.inView = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView = true;
          observer.disconnect(); // nur 1x animieren (recommended)
        }
      },
      { threshold: 0.25 }, // 25% sichtbar -> animieren
    );

    observer.observe(this.aboutSection.nativeElement);
  }
}
