import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe], 
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent {
  accepted = localStorage.getItem('cookiesAccepted') === 'true';

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.accepted = true;
  }
}
