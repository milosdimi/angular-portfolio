import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about = {
    title: 'Über mich',
    location: 'Kufstein, Tirol – offen für Remote-Arbeit',
    mindset: 'Neugierig, offen für neue Technologien und kontinuierliche Weiterentwicklung',
    approach:
      'Analytisch, lösungsorientiert und detailverliebt – mit Fokus auf Qualität, Performance und UX',
  };
}
