import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../interfaces/types/patient";
import {GenericResponseDialogComponent} from "../../shared/generic-response-dialog/generic-response-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl: string = 'http://localhost:8080/patients';
  constructor(
    private http: HttpClient,
    private responseDialog: MatDialog
  ) {}

  /* Accessors */
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  /* Mutators */
  createPatient(patient: Patient): Observable<HttpResponse<Patient>> {
    return this.http.post<Patient>(this.baseUrl, patient, {observe: "response"});
  }

  updatePatient(id: number, updatedPatient: Patient): Observable<HttpResponse<Patient>> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.http.put<Patient>(url, updatedPatient, {observe: "response"});
  }

  deletePatient(id: number): Observable<HttpResponse<any>> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url, {observe: 'response'});
  }

  getRequestResultDialog(
    requestSuccess: boolean,
    responseStatus: number,
    responseStatusText: any,
    responseMessage: any): void {
    this.responseDialog.open(GenericResponseDialogComponent, {
      data: {
        requestSuccess: requestSuccess,
        responseStatus: responseStatus,
        responseStatusText: responseStatusText,
        responseMessage: responseMessage
      }
    });
  }
}
