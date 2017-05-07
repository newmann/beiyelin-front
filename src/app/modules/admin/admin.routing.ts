import { Routes, RouterModule }  from '@angular/router';
import { Admin } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from "./login/login.component";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {
    path: '',
    component: Admin,
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
  // {
  //   path: 'person-login',
  //   loadChildren: 'app/modules/person/login/login.module#LoginModule'
  // },
  // {
  //   path: 'person-register',
  //   loadChildren: 'app/modules/person/register/register.module#RegisterModule'
  // },

  // {
  //   path: 'pages',
  //   component: Pages,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  //     { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
  //     { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
  //     { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  //     { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
  //     { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
  //     { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
  //     { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
  //   ]
  // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
