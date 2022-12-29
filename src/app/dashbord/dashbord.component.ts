import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserdataComponent } from '../delete-userdata/delete-userdata.component';
import { Userdata } from '../userdata';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

 allUserdata:any;
 displayedColumns: string[] = ['id', 'name', 'mobile','address','gender','email','action'];
  constructor(private userdata:UserdataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getalluserdata()
  }
getalluserdata(){
  this.userdata.getAll().subscribe((data)=>{
    this.allUserdata=data;
    console.log("data",this.allUserdata)
  })
}
openDeleteModal(id:number){
  const deleteConfm = this.dialog.open(DeleteUserdataComponent,{
    width: '350px',
    data:{id}
  });
  deleteConfm.afterClosed().subscribe((result)=>{
    if(result){
      this.allUserdata = this.allUserdata.filter((_: { id: number; })=>_.id !==id);
    }
  })
}  
}
