import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Userdata } from '../userdata';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-edit-userdata',
  templateUrl: './edit-userdata.component.html',
  styleUrls: ['./edit-userdata.component.css']
})
export class EditUserdataComponent implements OnInit {
  userdataRecords: Userdata = {
    id: 0,
    name: '',
    mobile:'',
    address: '',
    gender: '',
    email: ''
  }
  router: any;

  constructor(private userdataServices:UserdataService,private route:ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params)=>{
      let id =Number(params.get('id'))
      this.getbyId(id)
    })
  }

  getbyId(id:number){
    this.userdataServices.getbyId(id).subscribe((data)=>{
      this.userdataRecords =data;
    })
    
  }
  updateRecords(){
    this.userdataServices.update(this.userdataRecords).subscribe(()=>{
    this.router.navigate(['/']);
    })
  }



}
