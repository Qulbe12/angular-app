import {Component} from "@angular/core";
import {validateOrReject} from "class-validator";

@Component({template: ''})
export class NgBaseComponent {

  busy = false
  errors: any = {};
  serrors: string[] | null = null

  validate(obj: any, success: any) {
    validateOrReject(obj).then(() => {
      this.errors = {}
      success()
    }).catch(errors => {
      let xerrors = {};
      errors.map((e: any) => {
        const o = e.constraints
        let arrErrors: any[] = [];
        Object.getOwnPropertyNames(o).map(p => {
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

  handleServerErrors(ex: any) {
   if(Array.isArray(ex.error.message)){
    let errors : string[] = [];
    ex.error.message.map((e:any) => {
      const message = e;
      errors.push(message.charAt(0).toUpperCase() + message.slice(1))
    })
     this.serrors = errors;
   }else if(ex.error?.message){
     const message = ex.error.message
     this.serrors = [message.charAt(0).toUpperCase() + message.slice(1)];
   }else{
     this.serrors = ['Server error occurred.'];
   }
  }
}
