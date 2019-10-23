import {Routes} from '@angular/router';

//import {BaseLayoutComponent, SessionLayoutComponent} from '../../../web-450/bcrs/src/app/shared';
//import {LoginComponent} from '../../../web-450/bcrs/src/app/pages/login/login.component';
//import {HomeComponent} from '../../../web-450/bcrs/src/app/pages/home/home.component';
//import {NotFoundComponent} from '../../../web-450/bcrs/src/app/pages/not-found/not-found.component';

import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SessionLayoutComponent} from './shared/session-layout/session-layout.component';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'session',
    component: SessionLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
