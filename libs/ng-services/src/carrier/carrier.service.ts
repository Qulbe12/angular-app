import { ICarrierService } from "./carrier.interface";
import { CarrierProfileModel, ResetStatus } from "@trucks/core-shared";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class CarrierService implements ICarrierService {

  constructor(private http: HttpClient) { }


  register(model: CarrierProfileModel): Observable<ResetStatus> | Promise<ResetStatus> {
    return this.http.post<ResetStatus>(' http://localhost:3333/api/carrier/register', model)
  }

}
