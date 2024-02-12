import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-quillform',
  template: `
   <angular-editor
      [(ngModel)]="content"
      [config]="editorConfig"
      (ngModelChange)="emitcontentChangeAction($event)"     
    ></angular-editor>
  `,
  styles: [
  ]
})
export class QuillformComponent implements OnInit{
  @Input() condition: string;
  @Input() content: string;
  @Output() contentChangeAction: EventEmitter<any> = new EventEmitter<any>();
  @Input() title:string;
  editorConfig: AngularEditorConfig;
  constructor() {}
  ngOnInit(): void {
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '150px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: this.title,
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText',
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
  
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [['insertImage'], ['insertVideo']],
    };
  }

  
  emitcontentChangeAction(data: any) {
    this.contentChangeAction.emit(data);
  }
}
