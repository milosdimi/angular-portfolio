import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(private router: Router) {}

  goHome(): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

