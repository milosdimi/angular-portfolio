import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Translations = Record<string, any>;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly langSubject = new BehaviorSubject<string>('de');
  readonly lang$ = this.langSubject.asObservable();
  private translations: Translations = {};

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('lang');
    const initial = saved === 'en' || saved === 'de' ? saved : 'de';
    this.setLang(initial);
  }

  get currentLang(): string {
    return this.langSubject.value;
  }

  setLang(lang: 'de' | 'en'): void {
    if (this.langSubject.value !== lang) {
      this.langSubject.next(lang);
    }
    localStorage.setItem('lang', lang);
    this.load(lang);
  }

  t(key: string): string {
    if (!key) {
      return '';
    }

    const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), this.translations);
    return typeof value === 'string' ? value : key;
  }

  private load(lang: 'de' | 'en'): void {
    this.http.get<Translations>(`/assets/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations = data ?? {};
      },
      error: () => {
        this.translations = {};
      },
    });
  }
}
