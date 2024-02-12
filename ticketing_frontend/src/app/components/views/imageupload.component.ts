import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  template: `
   <div *ngIf="fileSelected" class="py-2">
      <div>
        <h5 class="poppins fontsize-14">Uploaded Files</h5>
      </div>
      <div
        *ngFor="let my_files of filesToUpload; let i = index"
        class="d-flex justify-content-between bg-gray"
      >
        <div>
          <button class="btn btn-danger btn-sm w-100 poppins px-5" disabled>
            {{ my_files.name }}
          </button>
        </div>
        <div>
          <i class="fa-solid fa-circle-xmark" (click)="removeNew(i)"></i>
        </div>
      </div>
    </div>
    <div class="py-2 text-center d-flex justify-content-between">
      <div class="dropzone drop_borderdash">
        <h3>Upload File</h3>
        <input
          type="file"
          #fileDropRef
          id="fileDropRef"
          (change)="fileChanged($event)"
          [accept]="'application/' + file_type"
          multiple
        />
        <img src="./../../../assets/images/upload.png" /><br />
        <!-- <h3>Drag and drop file here</h3>
                                    <h3>or</h3> -->
        <label for="fileDropRef">Browse for file</label>
      </div>
      <div class="py-5">
        <span class="poppins fontsize-15 bold">{{ upload_msg }}</span>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ImageuploadComponent implements OnInit{
  @Input() filenumber: number;
  @Input() file_type: string;
  @Input() moduleType: string;
  @Input() upload_msg: string;
  @Output() uploadedFile: EventEmitter<any> = new EventEmitter<any>();
  filesToUpload: any = [];
  fileSelected = false;
  constructor() {}
  ngOnInit(): void {}
  emitStatusChangeAction() {
    this.uploadedFile.emit(this.filesToUpload);
  }
  fileChanged(e: any) {
    if (this.filenumber == 1) {
      this.filesToUpload = [];
    }
    var selectedFiles = e.target.files;
    const c = this.checkNoofFiles(selectedFiles);
  }
  checkNoofFiles(selectedfiles: any) {
    var length = this.filesToUpload.length + selectedfiles.length;
    if (length > this.filenumber) {
      alert(
        'You cannot select files maximum than ' +
          this.filenumber +
          'Please Upload Again'
      );
      this.filesToUpload = [];
      this.fileSelected = false;
    } else {
      this.checkfileType(selectedfiles);
    }
  }
  checkfileType(selectedfiles: any) {
    for (let i = 0; i < selectedfiles.length; i++) {
      var mimeType = selectedfiles[i].type;
      var image = mimeType.split('/')[1];

      var selectedFile = selectedfiles[i];
      if (image == this.file_type) {
        this.filesToUpload.push(selectedFile);
        this.fileSelected = true;
      }
    }
    if (this.filesToUpload.length <= this.filenumber) {
      this.emitStatusChangeAction();
    } else {
      alert('Please Upload Again');
    }
  }
  removeNew(i: number) {
    this.filesToUpload.splice(i, 1);
    if (this.filesToUpload.length == 0) {
      this.fileSelected = false;
    }
  }
}
