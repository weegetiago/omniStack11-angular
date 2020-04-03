import { Routes } from '@angular/router'

import { LogonComponent } from './logon/logon.component'
import { CasesComponent } from './cases/cases.component'
import { NewCaseComponent } from './new-case/new-case.component'
import { RegisterComponent } from './register/register.component'

export const ROUTES: Routes = [
    { path: '', component: LogonComponent },
    { path: 'cases', component: CasesComponent },
    { path: 'new-case', component: NewCaseComponent },
    { path: 'register', component: RegisterComponent },
]