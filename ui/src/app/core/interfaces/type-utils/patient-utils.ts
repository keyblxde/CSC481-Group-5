// patient-utils.ts
import {Patient} from "../types/patient";
import {FormField} from "../types/form-field";

export function isPatient(variable: any): variable is Patient {
  return (
    typeof variable === "object" &&
    "id" in variable &&
    "lastName" in variable &&
    "firstName" in variable &&
    Array.isArray(variable.boxes) &&
    typeof variable.locations === "number"
  );
}

export function patientToString(patient: Patient): string {
  return (
    `ID: ${patient.id} - ` +
    `${patient.lastName} | ` +
    `Box: ${patient.boxes.join(", ")}, ` +
    `Locations: ${patient.locations}`
  );
}

export function mutablePatientFields(): FormField[] {
  return [
    {name: 'lastName', type: 'text', placeholder: 'Patient Last Name'},
    {name: 'firstName', type: 'text', placeholder: 'Patient First Name'},
  ];
}

export function newPatientFields(): FormField[] {
  return [
    {name: 'id', type: 'number', placeholder: 'Patient ID'},
    {name: 'lastName', type: 'text', placeholder: 'Patient Last Name'},
    {name: 'firstName', type: 'text', placeholder: 'Patient First Name'},
  ];
}
