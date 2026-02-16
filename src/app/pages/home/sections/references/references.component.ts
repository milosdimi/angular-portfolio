import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/i18n/translate.pipe';

type Reference = {
  text: string;
  author: string;
  role: string;
};

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      text: 'references.items.0',
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      text: 'references.items.1',
      author: 'A. Fischer',
      role: 'Team Partner',
    },
    {
      text: 'references.items.2',
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
    {
      text: 'references.items.3',
      author: 'S. Meier',
      role: 'Team Partner',
    },
    {
      text: 'references.items.4',
      author: 'L. Berger',
      role: 'Team Partner',
    },
  ];

  activeIndex = 0;

  prev(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
  }

  goTo(i: number): void {
    this.activeIndex = i;
  }

  get leftIndex(): number {
    return (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  get rightIndex(): number {
    return (this.activeIndex + 1) % this.references.length;
  }
}
