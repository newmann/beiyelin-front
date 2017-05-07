import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { routing }       from './admin.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { Admin } from './admin.component';
import {AuthService} from "./common/auth/auth.service";
import {AuthGuard} from "./common/auth/auth.guard";
import {LoginComponent} from "./login/login.component";
import {AdminService} from "./common/admin.service";


// Admin module wide providers
const ADMIN_PROVIDERS = [
  AuthService,
  AuthGuard,
  AdminService
];

@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule, AppTranslationModule, NgaModule, routing],

  declarations: [Admin,LoginComponent],
  providers:[ADMIN_PROVIDERS]
})
export class AdminModule {
}
