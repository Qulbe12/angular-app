import {
  AuthUserDto, CarrierProfileModel,
  ForgetPasswordModel,
  LoginModel,
  Otp,
  RegisterModel,
  ResetPasswordModel,
  ResetStatus
} from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface ICarrierService {
  register(model: CarrierProfileModel, req: any): Observable<ResetStatus> | Promise<ResetStatus>
}


export abstract class AbstractCarrierService implements ICarrierService {
  abstract register(model: CarrierProfileModel): Observable<ResetStatus>
}
