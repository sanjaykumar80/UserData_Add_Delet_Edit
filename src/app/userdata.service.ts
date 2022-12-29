import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  // Get All data 

  getAll():Observable<Userdata>{
    return this.http.get<Userdata>("http://localhost:3000/Userdata")
  }

  // Add Records

  create(paylode:Userdata):Observable<Userdata>{
    return this.http.post<Userdata>("http://localhost:3000/Userdata",paylode)
  }

  //get Records by Id

  getbyId(id:number):Observable<Userdata>{
    return this.http.get<Userdata>(`http://localhost:3000/Userdata/${id}`);
  }

  //Update Records

  update(paylode:Userdata):Observable<Userdata>{
    return this.http.put<Userdata>(`http://localhost:3000/Userdata/${paylode.id}`,paylode);
  }

  //Delet Records
  delete(id:number){
    return this.http.delete(`http://localhost:3000/Userdata/${id}`)
  }
}
