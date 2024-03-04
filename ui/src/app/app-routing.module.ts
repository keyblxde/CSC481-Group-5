import {NgModule} from '@angular/core';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from  '@angular/fire/auth-guard'
import {RouterModule, Routes} from "@angular/router";

import {ExclusiveTableComponent} from "./features/boxes/exclusive/exclusive-table/exclusive-table.component";
import {ExclusiveAddFormComponent} from "./features/boxes/exclusive/exclusive-add-form/exclusive-add-form.component";
import {LoginPageComponent} from "./features/login-page/login-page.component";
import {NonexclusiveTableComponent} from "./features/boxes/nonexclusive/nonexclusive-table/nonexclusive-table.component";
import {NonexclusiveAddFormComponent} from "./features/boxes/nonexclusive/nonexclusive-add-form/nonexclusive-add-form.component";
import {PatientsTableComponent} from "./features/patients/patients-table/patients-table.component";
import {PatientsAddFormComponent} from "./features/patients/patients-add-form/patients-add-form.component";
import {PaidRecordsTableComponent} from "./features/paid-records/paid-records-table/paid-records-table.component";
import {PaidRecordsAddFormComponent} from "./features/paid-records/paid-records-add-form/paid-records-add-form.component";


const  redirectUnauthorizedToLogin = () => {
  return redirectUnauthorizedTo(['login']);
};
const  redirectLoggedInToPatients = () => {
  return redirectLoggedInTo(['patients/table']);
};

const routes: Routes = [
  {
    path:  '',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectLoggedInToPatients}
  },
  {
    path:  'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectLoggedInToPatients}
  },
  {
    path: 'patients/table',
    component: PatientsTableComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'patients/add',
    component: PatientsAddFormComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'boxes/nonexclusive/table',
    component: NonexclusiveTableComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'boxes/nonexclusive/add',
    component: NonexclusiveAddFormComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'boxes/exclusive/table',
    component: ExclusiveTableComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'boxes/exclusive/add',
    component: ExclusiveAddFormComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'paid/table',
    component: PaidRecordsTableComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'paid/add',
    component: PaidRecordsAddFormComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

