import { Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('./component/main/main.component').then(
            (m) => m.MainComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '',
    component: FooterComponent,
  },
];
