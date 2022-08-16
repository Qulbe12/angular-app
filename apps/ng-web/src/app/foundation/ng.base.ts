import {Component} from "@angular/core";
import {validateOrReject} from "class-validator";

@Component({template: ''})
export class NgBaseComponent {

  busy = false
  errors : any = {};

  validate(obj: any, success: any) {
    validateOrReject(obj).then(()=> {
      this.errors = {}
      success()
    }).catch(errors => {
      let xerrors = {};
      errors.map((e: any) => {
        const o = e.constraints
        let arrErrors: any[] = [];
        Object.getOwnPropertyNames(o).map(p =>
        {
          const op = o[p];
          const e = op.charAt(0).toUpperCase() + op.slice(1)
          arrErrors.push(e)
        })
        xerrors = {...xerrors, [e.property]: arrErrors}
        this.errors = xerrors;
        this.busy = false;
      })
    })
  }
}
