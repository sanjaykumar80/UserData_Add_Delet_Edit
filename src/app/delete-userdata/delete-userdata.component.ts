import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-delete-userdata',
  templateUrl: './delete-userdata.component.html',
  styleUrls: ['./delete-userdata.component.css']
})
export class DeleteUserdataComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserdataComponent>,
   private userdataServices:UserdataService, @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }


  conformDelete(){
   this.userdataServices.delete(this.data.id).subscribe(()=>{
    this.dialogRef.close(this.data.id)
   })
  }
}
