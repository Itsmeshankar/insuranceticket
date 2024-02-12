export class Branch {
    branchName;
    branchCode;
    islocked;
    id;
    constructor(obj:any){
        this.branchName=obj.branchName||''
        this.branchCode=obj.branchCode||''
        this.islocked=obj.islocked||''
        this.id=obj.id||''
        return obj;
    }
}