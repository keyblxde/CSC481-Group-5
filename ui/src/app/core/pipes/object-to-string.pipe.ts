import {Pipe, PipeTransform} from '@angular/core';
import {isPatient, patientToString} from "../interfaces/type-utils/patient-utils";
import {isNonexclusiveBox, nonexclusiveBoxToString} from "../interfaces/type-utils/nonexclusive-box-utils";
import {exclusiveBoxToString, isExclusiveBox} from "../interfaces/type-utils/exclusive-box-utils";
import {isPaidRecord, paidRecordToString} from "../interfaces/type-utils/paid-record-utils";


@Pipe({
  name: 'objectToString'
})
export class ObjectToStringPipe implements PipeTransform {
  transform(value: any): string {
    if (isPatient(value)) {
      return patientToString(value);
    }
    else if (isNonexclusiveBox(value)) {
      return nonexclusiveBoxToString(value);
    }
    else if (isExclusiveBox(value)) {
      return exclusiveBoxToString(value);
    }
    else if(isPaidRecord(value)) {
      return paidRecordToString(value);
    }
    else {
      return 'Unknown type';
    }
  }
}

