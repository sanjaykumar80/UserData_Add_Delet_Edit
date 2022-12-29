import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserdataComponent } from './add-userdata/add-userdata.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditUserdataComponent } from './edit-userdata/edit-userdata.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'add-userdata',component:AddUserdataComponent},
  {path:'edit-userdata/:id',component:EditUserdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
