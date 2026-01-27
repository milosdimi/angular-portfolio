import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  year = new Date().getFullYear();
  email = 'dm&#64;dimit.cc';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
