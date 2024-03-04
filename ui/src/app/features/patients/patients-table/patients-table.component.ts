// patient-table.component.ts
import {AfterViewInit, Component, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Patient} from "../../../core/interfaces/types/patient";
import {SelectionModel} from "@angular/cdk/collections";
import {PatientService} from "../../../core/services/patient.service";


@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html'
})
export class PatientsTableComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Patient> = new MatTableDataSource<Patient>();
  selection: SelectionModel<Patient> = new SelectionModel<Patient>(true, []);
  columns: string[] = ['select', 'id', 'lastName', 'firstName', 'boxes', 'locations'];
  columnHeaders: string[] = ['Select', 'ID', 'Last Name', 'First Name', 'Boxes', 'Locations'];
  sortedPatients: Patient[] = [];
  @Input() deleteRequest!: Event;
  @Input() displayUpdateOptions!: boolean;

  constructor(private patientService: PatientService) {}

  ngAfterViewInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients()
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  deletePatients(event: Boolean): void {
    if (event) {
      this.sortedPatients.forEach((patient: Patient): void => {
        this.patientService.deletePatient(patient.id)
          .subscribe({
            next: (response: any): void => {
              this.patientService.getRequestResultDialog(
                true,
                response.status,
                response.statusText,
                'Patient deleted successfully');
            },
            error: (error: any): void => {
              this.patientService.getRequestResultDialog(
                false,
                error.status,
                error.error.error,
                error.error.message);
            },
            complete: (): void => {
              console.log('Process complete!');
            }
          });
      });
    }
  }

  refreshSelection(selection: SelectionModel<any>): void {
    this.selection = selection;
    this.sortedPatients = this.selection.selected.sort((p1: Patient, p2: Patient): number => {
      const l1: string = p1.lastName.toUpperCase();
      const l2: string = p2.lastName.toUpperCase();
      if (l1 < l2) {
        return -1;
      }
      else if (l1 > l2) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }
}
