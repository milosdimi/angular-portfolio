import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent {
  accepted = localStorage.getItem('cookiesAccepted') === 'true';

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.accepted = true;
  }
}
