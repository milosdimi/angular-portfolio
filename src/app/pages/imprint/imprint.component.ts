import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImpressumComponent implements OnInit {
  year = new Date().getFullYear();
  email = 'dm&#64;dimit.cc'; // Angular 17 safe

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Ensure we start at top, also on direct loads in Firefox.
    window.scrollTo({ top: 0, left: 0 });
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    this.router.navigateByUrl('/');
  }
}
