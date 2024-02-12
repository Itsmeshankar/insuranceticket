import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class BaseService{
    baseUrl;
    appid=''
    constructor(){
        this.baseUrl=environment.BaseUrl || '';
    }
    getOptions(){
        let options = {
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'app-id':this.appid
            
          })
        }
        return options;
       }
       getOptionsWithToken(){
        let options = {
          headers:new HttpHeaders({
            'Content-Type':'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Authorization':localStorage.getItem('token')||'',
            'app-id':this.appid
          })
        }
        return options;
       }
}