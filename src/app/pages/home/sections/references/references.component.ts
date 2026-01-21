import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Reference = {
  text: string;
  author: string;
  role: string;
};

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      text: `Milos has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.`,
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      text: `I had the good fortune of working with Milos in a group project. He stayed calm, focused, and made sure our team was set up for success.`,
      author: 'A. Fischer',
      role: 'Team Partner',
    },
    {
      text: `Strong communication, clean implementation, and a great sense for UI/UX details. I’d happily work with him again.`,
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
    {
      text: `Very structured and reliable. Milos helped keep the project on track and supported the team whenever needed.`,
      author: 'S. Meier',
      role: 'Team Partner',
    },
    {
      text: `Great technical understanding and fast execution. Milos delivers clean code and communicates clearly.`,
      author: 'L. Berger',
      role: 'Team Partner',
    },
  ];

  activeIndex = 0;

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
  }

  goTo(i: number) {
    this.activeIndex = i;
  }

  get leftIndex(): number {
    return (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  get rightIndex(): number {
    return (this.activeIndex + 1) % this.references.length;
  }
}
