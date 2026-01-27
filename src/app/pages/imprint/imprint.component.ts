import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImpressumComponent {
  year = new Date().getFullYear();
  email = 'dm&#64;dimit.cc'; // Angular 17 safe

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
