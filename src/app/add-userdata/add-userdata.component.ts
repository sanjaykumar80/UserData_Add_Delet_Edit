import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdata } from '../userdata';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-add-userdata',
  templateUrl: './add-userdata.component.html',
  styleUrls: ['./add-userdata.component.css']
})
export class AddUserdataComponent implements OnInit {

  userdataRecords: Userdata = {
    id: 0,
    name: '',
    mobile:'',
    address: '',
    gender: '',
    email: ''
  }


  constructor(private userdataServices:UserdataService, private router:Router) { }

  ngOnInit(): void {
  }

  addrecords(){
    this.userdataServices.create(this.userdataRecords).subscribe((data)=>{
      this.router.navigate(["/"])
    })
  }
}
