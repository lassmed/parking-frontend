import { Component } from '@angular/core';
import { Parking } from '../parking';
import { ParkingAdminService } from '../parking-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css']
})
export class CreateParkingComponent {
  parking : Parking = new Parking;
  msg ='';
  constructor(private _Service :ParkingAdminService , private _router :Router ){}
  AddParking() {
    this._Service.createParking(this.parking).subscribe(
      data => { console.log(data);
        this.goToParkingsList()},
      error => {console.log(error)}
    )

  }
  goToParkingsList(){
    this._router.navigate(['/parkings']);

  }


}
