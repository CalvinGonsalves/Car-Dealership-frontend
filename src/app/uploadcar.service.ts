import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class UploadcarService {

  constructor(private http: Http) { }



  uploadcars(make,modelname,price,engine,file,year,status)
  { 
    
    
    let fd = new FormData();

    fd.append("make",make);
    fd.append("modelname",modelname);
    fd.append("price",price);
    fd.append("engine",engine);
    fd.append("file",file);
    fd.append("year",year);
    fd.append("status",status);

    console.log(file + 'in update');
    
    return this.http.post("http://localhost:3000/api/car", fd);
  }


}
