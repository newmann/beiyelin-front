import { Routes, RouterModule }  from '@angular/router';
import { Person } from './person.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/modules/person/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/modules/person/register/register.module#RegisterModule'
  },
  {
    path: '',
    component: Person,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/modules/person/dashboard/dashboard.module#DashboardModule' },
      // { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  }
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
