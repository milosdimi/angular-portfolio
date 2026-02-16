import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';
import { TranslationService } from '../../shared/i18n/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router, private i18n: TranslationService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  goHome(): void {
    this.closeMenu();

    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setLang(lang: 'de' | 'en'): void {
    this.i18n.setLang(lang);
  }

  get currentLang(): string {
    return this.i18n.currentLang;
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }
}
