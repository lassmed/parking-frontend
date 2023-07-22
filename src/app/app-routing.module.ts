import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParkingsAdminComponent } from './parkings-admin/parkings-admin.component';
import { CreateParkingComponent } from './create-parking/create-parking.component';
import { UpdateParkingComponent } from './update-parking/update-parking.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'parkings',component:ParkingsAdminComponent},
  {path:'addparking',component:CreateParkingComponent},
  {path:'updateparking/:id',component:UpdateParkingComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
