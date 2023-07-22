import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from './parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingAdminService {

  private baseURL = "http://localhost:8088/api/v1/Parkings";

  constructor(private _http: HttpClient) { }

  getParkingsList() : Observable<Parking[]>{
    return this._http.get<Parking[]>(`${this.baseURL}`)
  }
  createParking(parking: Parking): Observable<Object>{
    return this._http.post("http://localhost:8088/api/v1/Parkings",parking);
  }
  getParkingById(id:number): Observable<Parking>{
    return this._http.get<Parking>(`${this.baseURL}/${id}`);
  }
  updateParking(id:number,parking:Parking): Observable<Object>{
    return this._http.put(`${this.baseURL}/${id}`,parking);
  }
  deleteParking(id:number):Observable<Object>{
    return this._http.delete(`${this.baseURL}/${id}`);
  }
}
