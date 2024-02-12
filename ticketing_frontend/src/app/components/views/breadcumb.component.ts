import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  template: `
   <CDBBreadcrumb color="dark" class="align-items-center text-white">
    <li class="breadcrumb-item">
        <CDBLink class="p-0 text-white" to="/breadcrumb">Home</CDBLink>
    </li>
    <CDBIcon class="mx-2 text-muted" [fas]=true icon="angle-double-right"></CDBIcon>
    <li class="breadcrumb-item">
        <CDBLink class="p-0 text-white" to="/breadcrumb">Library</CDBLink>
    </li>
    <CDBIcon class="mx-2 text-muted" [fas]=true icon="angle-double-right"></CDBIcon>
    <li class="breadcrumb-item">Data</li>
</CDBBreadcrumb>
  `,
  styles: [
  ]
})
export class BreadcumbComponent implements OnInit{

  parenthead='';
  childhead='';
  gchildhead='';
  parentlink='';
  childlink='';
  gchildlink='';
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
