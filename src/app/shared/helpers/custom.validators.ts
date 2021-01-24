import { AbstractControl } from '@angular/forms';
const AngularExpressions = require("angular-expressions");

export function operationValidator(control: AbstractControl) {
    if(control.value == null) { return { operationValid: true }; }
    
    var evaluateEXP = AngularExpressions.compile(control.value);
    
    if(evaluateEXP() == 7) {
        return null;
    } else {
        return { operationValid: true };
    }
}    