import { Component } from '@angular/core';
import { Parking } from '../parking';
import { Router } from '@angular/router';

import { ParkingAdminService } from '../parking-admin.service';

@Component({
  selector: 'app-parkings-admin',
  templateUrl: './parkings-admin.component.html',
  styleUrls: ['./parkings-admin.component.css']
})
export class ParkingsAdminComponent {

  parkings: Parking[] | undefined;
  constructor(private _Service :ParkingAdminService , private _router :Router){}
  ngOnInit(): void{
    this.parkings=[{
      "id":1,
      "full":false,
      "position":"INSAT",
      "user_id":1
    }, 
    {
      "id":2,
      "full":false,
      "position":"ULT",
      "user_id":2
    }
  ]
    this.getParkings();
    
  }
  private getParkings(){
    this._Service.getParkingsList().subscribe(
      data => { this.parkings= data ;}
    )
  }
  navigateToAddParking(): void {
    this._router.navigate(['/addparking']);
  }
  updateParking(id: number){
    this._router.navigate(['/updateparking',id]);
  }
  deleteParking(id: number){
    this._Service.deleteParking(id).subscribe(
      data => {
        console.log(data);
        this.getParkings();}
    )
  }


}
