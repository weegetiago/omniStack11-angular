import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { ROUTES } from './app.routes';
import { IconsModule } from './app.icon.module'

import { Services } from './app.service';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { LogonComponent } from './logon/logon.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    LogonComponent,
    NewCaseComponent,
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    IconsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
