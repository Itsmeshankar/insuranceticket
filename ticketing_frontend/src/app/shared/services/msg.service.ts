import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MsgService {
  constructor(public toastr: ToastrService) {}
  showSuccess(msg: string) {
    this.toastr.success(msg);
  }
  showWarning(msg: string) {
    this.toastr.warning(msg);
  }
  showInfo(msg: string) {
    this.toastr.info(msg);
  }
  showError(err: any) {
    if (err.error) {
      var msg = err.error.split('<h1>').pop().split('</h1>')[0];
      this.toastr.error(msg);

      // switch(msg){
      //     case 'E11000':
      //         this.error(`provided value 'test' is already taken`);
      //         break;
      //     default:
      //         this.error(err.error.errrmsg);
      // }
    }
  }
  error(msg: string) {
    this.toastr.error(msg);
  }
}
