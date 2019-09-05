// import { ToasterService } from './toaster.service';
import { Injectable } from '@angular/core';
import { ToastrService, Toast} from 'ngx-toastr'
declare var toastr : any;
// setting : any;
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { 

    // this.setting();
  }

  Danger(title:string,message?:string){
    toastr.success(title,message);
  }

  Success(title:string,message?:string){
    toastr.success(title,message);
  }

  
}

