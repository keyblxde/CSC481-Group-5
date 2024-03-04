import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";
import {ServiceWorkerModule} from '@angular/service-worker';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {GenericConfirmationDialogComponent} from './shared/generic-confirmation-dialog/generic-confirmation-dialog.component';
import {GenericFilterComponent} from './shared/generic-filter/generic-filter.component';
import {GenericFormComponent} from './shared/generic-form/generic-form.component';
import {GenericResponseDialogComponent} from './shared/generic-response-dialog/generic-response-dialog.component';
import {GenericSelectionListComponent} from './shared/generic-selection-list/generic-selection-list.component';
import {GenericTabComponent} from './shared/generic-tab/generic-tab.component';
import {GenericTableComponent} from './shared/generic-table/generic-table.component';

import {PatientsTabComponent} from './features/patients/patients-tab/patients-tab.component';
import {PatientsTableComponent} from './features/patients/patients-table/patients-table.component';
import {PatientsEditFormComponent} from './features/patients/patients-edit-form/patients-edit-form.component';
import {PatientsAddFormComponent} from './features/patients/patients-add-form/patients-add-form.component';

import {ExclusiveAddFormComponent} from './features/boxes/exclusive/exclusive-add-form/exclusive-add-form.component';
import {ExclusiveEditFormComponent} from './features/boxes/exclusive/exclusive-edit-form/exclusive-edit-form.component';
import {ExclusiveTabComponent} from './features/boxes/exclusive/exclusive-tab/exclusive-tab.component';
import {ExclusiveTableComponent} from './features/boxes/exclusive/exclusive-table/exclusive-table.component';

import {LoginPageComponent} from './features/login-page/login-page.component';

import {NonexclusiveTabComponent} from './features/boxes/nonexclusive/nonexclusive-tab/nonexclusive-tab.component';
import {NonexclusiveTableComponent} from './features/boxes/nonexclusive/nonexclusive-table/nonexclusive-table.component';
import {NonexclusiveEditFormComponent} from './features/boxes/nonexclusive/nonexclusive-edit-form/nonexclusive-edit-form.component';
import {NonexclusiveAddFormComponent} from './features/boxes/nonexclusive/nonexclusive-add-form/nonexclusive-add-form.component';

import {PaidRecordsAddFormComponent} from './features/paid-records/paid-records-add-form/paid-records-add-form.component';
import {PaidRecordsEditFormComponent} from './features/paid-records/paid-records-edit-form/paid-records-edit-form.component';
import {PaidRecordsTabComponent} from './features/paid-records/paid-records-tab/paid-records-tab.component';
import {PaidRecordsTableComponent} from './features/paid-records/paid-records-table/paid-records-table.component';

import {ObjectToStringPipe} from './core/pipes/object-to-string.pipe';
import {SideNavigationComponent} from './shared/side-navigation/side-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ExclusiveAddFormComponent,
    ExclusiveEditFormComponent,
    ExclusiveTabComponent,
    ExclusiveTableComponent,
    GenericConfirmationDialogComponent,
    GenericFilterComponent,
    GenericFormComponent,
    GenericResponseDialogComponent,
    GenericSelectionListComponent,
    GenericTableComponent,
    GenericTabComponent,
    LoginPageComponent,
    NonexclusiveAddFormComponent,
    NonexclusiveEditFormComponent,
    NonexclusiveTabComponent,
    NonexclusiveTableComponent,
    ObjectToStringPipe,
    PaidRecordsAddFormComponent,
    PaidRecordsEditFormComponent,
    PaidRecordsTabComponent,
    PaidRecordsTableComponent,
    PatientsAddFormComponent,
    PatientsEditFormComponent,
    PatientsTabComponent,
    PatientsTableComponent,
    SideNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
