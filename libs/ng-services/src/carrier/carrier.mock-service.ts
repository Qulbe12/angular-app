import {ICarrierService} from "./carrier.interface";
import {Injectable} from "@angular/core";
import {CarrierProfileModel,  ResetStatus} from "@trucks/core-shared";
import {Observable} from "rxjs";


@Injectable()
export class CarrierMockService implements ICarrierService {
  register(model: CarrierProfileModel): Observable<ResetStatus> {
      const observable = new Observable<ResetStatus>(observer => {
        const dto = {status : "123654"};
        observer.next(dto)
      });
      return observable;
    }
  }
