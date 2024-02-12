import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componentnamebox',
  template: `
    <div class="namebox bg-gray py-1 px-3 w-100 weight-400 rounded">
        <label class="poppins fontsize-15 m-0 ">{{name || 'name is'}}</label>
    </div>
    <hr class="my-1">
  `,
  styles: [
  ]
})
export class ComponentnameboxComponent {
  @Input() name:String;

}
