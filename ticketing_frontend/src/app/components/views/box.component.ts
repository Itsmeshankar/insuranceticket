import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
   <div class="custom-box">
      <div 
      [ngStyle]="{'height': height, 
                  'width':width, 
                  'background-color':backgroundcolorName,
                  'color': colorName,
                  'padding': paddingTRBL,
                  'margin':marginTRBL
                  }" >
                  <i class="fa-regular" [ngClass]="iconName" *ngIf="isIcon"></i>
                </div>
   </div>
  `,
  styles: [
  ]
})
export class BoxComponent {
  @Input() height:string;
  @Input() width: string;
  @Input() isIcon:Boolean;
  @Input() iconName:string;
  @Input() backgroundcolorName: string;
  @Input() colorName: string;
  @Input() isDisabled:Boolean;
  @Input() paddingTRBL:string;
  @Input() marginTRBL:string;
  @Input() isText:Boolean;
  @Input() textmsg:String;
}
