import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from './translation.service';

@Pipe({
  name: 't',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private readonly sub: Subscription;

  constructor(private i18n: TranslationService, cdr: ChangeDetectorRef) {
    this.sub = this.i18n.lang$.subscribe(() => cdr.markForCheck());
  }

  transform(key: string): string {
    return this.i18n.t(key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
