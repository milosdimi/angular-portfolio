import {
  Component,
} from '@angular/core';
import { TranslatePipe } from '../../../../shared/i18n/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

type SkillItem = {
  name: string;
  icon: string;
  accent?: boolean;
  white?: boolean;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  showGrowthHint = false;

  row1: SkillItem[] = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'TypeScript', icon: 'ts.svg' },
  ];

  row2: SkillItem[] = [
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Material\nDesign', icon: 'md.svg' },
    { name: 'Firebase', icon: 'fb.svg' },
    { name: 'Supabase', icon: 'supabase-logo-icon.svg', white: true },
  ];

  row3: SkillItem[] = [
    { name: 'REST-API', icon: 'api.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
  ];
}
