import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ROUTES} from './app.routes';
import {IconsModule} from './app.icon.module'

import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { LogonComponent } from './logon/logon.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    LogonComponent,
    NewCaseComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
