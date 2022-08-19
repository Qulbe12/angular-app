import {ICarrierService} from "./carrier.interface";
import {CarrierProfileModel, ResetStatus} from "@trucks/core-shared";
import {Observable} from "rxjs";

export class CarrierService implements ICarrierService{
  register(model: CarrierProfileModel): Observable<ResetStatus> | Promise<ResetStatus> {
    return undefined;
  }

}
