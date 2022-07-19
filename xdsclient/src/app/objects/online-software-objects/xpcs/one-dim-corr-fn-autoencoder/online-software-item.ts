import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

export class CorrFnDataObj {
    Alpha = 0;
    Beta = 0;
    Gamma = 0;
    Constant = 0;
    NoiseFactor = 0;
    Name = '';
}


export class CorrFnFormGroupAPIs {

    constructor() {}

    BuildFormGroup() {
        var newDataForm  = new FormGroup(
            {
            title:new FormControl("",
            [
                Validators.required,
                Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
            ]),
            email:new FormControl("",[Validators.required]),
            price:new FormControl("",[Validators.required]),
            sell_price:new FormControl("",[Validators.required]),
            author:new FormControl("",[Validators.required]),
            date:new FormControl("",[Validators.required]),
            }
        );
        return newDataForm;
    }


    GetFormGroupAsObject() {
        
    }
}