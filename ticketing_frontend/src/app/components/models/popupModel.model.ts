export class PopupModel {
    email;
    password;
    constructor(obj:any){
        this.email=obj.email||''
        this.password=obj.email||''

        return obj;
    }
}