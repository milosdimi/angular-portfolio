import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../../../../shared/i18n/translate.pipe';

type SkillItem = {
  name: string;
  icon: string;
  accent?: boolean; // für optionales Highlight (z.B. Growth)
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection', { static: true })
  skillsSection!: ElementRef<HTMLElement>;

  inView = false;
  showGrowthHint = false;

    // Right grid items
  row1: SkillItem[] = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'Material\nDesign', icon: 'md.svg' },
  ];

  row2: SkillItem[] = [
    { name: 'TypeScript', icon: 'ts.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Firebase', icon: 'fb.svg' },
    { name: 'Git', icon: 'git.svg' },
  ];

  row3: SkillItem[] = [
    { name: 'REST-API', icon: 'api.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.inView = true;
      return;
    }

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
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -25% 0px', // Viewport
      },
    );

    observer.observe(this.skillsSection.nativeElement);
  }
}
