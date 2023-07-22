import { Component } from '@angular/core';
import { Parking } from '../parking';
import { ParkingAdminService } from '../parking-admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-parking',
  templateUrl: './update-parking.component.html',
  styleUrls: ['./update-parking.component.css']
})
export class UpdateParkingComponent {
  

  id!: number;
  parking : Parking = new Parking;
  msg ='';
  constructor(private _Service :ParkingAdminService , private _router :Router,private _route: ActivatedRoute ){}
  ngOnInit():void{

    this.id= this._route.snapshot.params['id'];
    this._Service.getParkingById(this.id).subscribe(
      data =>{this.parking=data;},
      error=>console.log(error)
    );

  }
  goToParkingsList(){
    this._router.navigate(['/parkings']);

  }
  updateParking() {
    this._Service.updateParking(this.id,this.parking).subscribe(
      data => {this.goToParkingsList();},
      error => console.log(error)
      
    );

  }

}
