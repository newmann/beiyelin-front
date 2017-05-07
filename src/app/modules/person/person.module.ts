import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './person.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { Person } from './person.component';
import {AuthService} from "./service/auth/auth.service";
import {AuthGuard} from "./service/auth/auth.guard";
import {PersonService} from "./service/person/person.service";
// Admin module wide providers
const PERSON_PROVIDERS = [
  AuthService,
  AuthGuard,
  PersonService
];

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule,  routing],

  declarations: [Person],
  providers:[PERSON_PROVIDERS]
})
export class PersonModule {
}
