import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { BreadcumbComponent } from './breadcumb.component';
import { TableComponent } from './table.component';
import { ButtonComponent } from './button.component';
import { PaginationComponent } from './pagination.component';
import {CDBFreeModule} from 'ng-cdbangular';
import { LoaderComponent } from './loader.component';
import { ImageuploadComponent } from './imageupload.component';
import { QuillformComponent } from './quillform.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar.component';
import { ComponentnameboxComponent } from './componentnamebox.component';
import { BoxComponent } from './box.component';

@NgModule({
  declarations: [
    PopupComponent,
    BreadcumbComponent,
    TableComponent,
    ButtonComponent,
    PaginationComponent,
    LoaderComponent,
    ImageuploadComponent,
    QuillformComponent,
    SidebarComponent,
    ComponentnameboxComponent,
    BoxComponent,
    
  ],
  imports: [
    CommonModule,
    CDBFreeModule,
    AngularEditorModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ], 
  exports:[
    PopupComponent,
    BreadcumbComponent,
    TableComponent,
    ButtonComponent,
    PaginationComponent,
    LoaderComponent,
    ImageuploadComponent,
    QuillformComponent,
    SidebarComponent,
    ComponentnameboxComponent,
    BoxComponent,
  ]
})
export class ComponentsModule { }
