import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/imprint/imprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent, title: 'Impressum' },
  { path: 'datenschutz', component: PrivacyComponent, title: 'Datenschutz' },
  { path: '**', redirectTo: '' },
];
