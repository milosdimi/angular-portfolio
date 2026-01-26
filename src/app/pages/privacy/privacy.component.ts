import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
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
