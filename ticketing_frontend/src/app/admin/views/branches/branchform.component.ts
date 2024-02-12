import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-branchform',
  template: `
 
    <p>
      branchform works!
    </p>
  `,
  styles: [
  ]
})
export class BranchformComponent implements OnInit{
  @Input() action: string;
  @Input() branchData: Branch;
  formtitle = '';
  loading = false;
  error = '';
  branchDetails;
  branchForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    // private backgroundService: AdsService,
    private router: Router
  ){
    this.branchDetails = new Branch({});
  }
  ngOnInit(): void {
    if (this.action == 'updatedata') {
      this.branchDetails = this.branchData;
      this.formtitle = 'Update Branch Details';
    } else {
      this.formtitle = 'Add Branch Details';
    }
    this.branchForm = this.formBuilder.group({
      branchName: [this.branchDetails.branchName, [Validators.required]],
      branchCode: this.branchDetails.branchCode,
      islocked: this.branchDetails.islocked,
    });
  }
  get f() {
    return this.branchForm.controls;
  }
  get branchName() {
    return this.branchForm.get('branchName');
  }
  get branchCode() {
    return this.branchForm.get('branchCode');
  }
  get islocked() {
    return this.branchForm.get('islocked');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.branchForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };
  onSubmit() {
    var submissionData: Branch = this.branchForm.value;
    if (this.branchForm.invalid) {
      return;
    }

    if (this.action == 'updatedata') {
      submissionData.id = this.branchDetails.id;
      this.manageMysubmissionData(submissionData);
    } else {
      this.manageMysubmissionData(submissionData);
    }
  }
  manageMysubmissionData(submissionData: Branch) {
    if (submissionData.islocked == null || submissionData.islocked == false) {
      submissionData.islocked = 0;
    }
    if (submissionData.islocked == true) {
      submissionData.islocked = 1;
    }

    this.loading = true;

    // this.backgroundService
    //   .upload(submissionData, this.filesToUpload)
    //   .pipe(first())
    //   .subscribe({
    //     next: (data: any) => {
    //       this.router.navigate(['/adm/ads']);
    //     },
    //     error: (error) => {
    //       this.error = error;
    //       this.loading = false;
    //       this.submissionFailed = true;
    //     },
    //   });
  }
}
