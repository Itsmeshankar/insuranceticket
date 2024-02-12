import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdddepartmentComponent } from './views/departments/adddepartment.component';
import { EditdepartmentComponent } from './views/departments/editdepartment.component';
import { DepartmentformComponent } from './views/departments/departmentform.component';
import { ListdepartmentsComponent } from './views/departments/listdepartments.component';
import { UserformComponent } from './views/users/userform.component';
import { AddtopicComponent } from './views/topics/addtopic.component';
import { EdittopicComponent } from './views/topics/edittopic.component';
import { ListtopicComponent } from './views/topics/listtopic.component';
import { TopicformComponent } from './views/topics/topicform.component';
import { AddpermissionComponent } from './views/permission/addpermission.component';
import { EditpermissionComponent } from './views/permission/editpermission.component';
import { ListpermissionComponent } from './views/permission/listpermission.component';
import { PermissionformComponent } from './views/permission/permissionform.component';
import { UserpermissionComponent } from './views/permission/userpermission.component';
import {ComponentsModule} from './../components/views/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AddbranchComponent} from './views/branches/addbranch.component';
import {BranchformComponent} from './views/branches/branchform.component';
import {EditbranchComponent} from './views/branches/editbranch.component';
import {ListbranchComponent} from './views/branches/listbranch.component';
import { AddprioritiesComponent } from './views/priorities/addpriorities.component';
import { EditprioritiesComponent } from './views/priorities/editpriorities.component';
import { ListprioritiesComponent } from './views/priorities/listpriorities.component';
import { PrioritiesformComponent } from './views/priorities/prioritiesform.component';

@NgModule({
  declarations: [
    AdddepartmentComponent,
    EditdepartmentComponent,
    DepartmentformComponent,
    ListdepartmentsComponent,
    UserformComponent,
    AddtopicComponent,
    EdittopicComponent,
    ListtopicComponent,
    TopicformComponent,
    AddpermissionComponent,
    EditpermissionComponent,
    ListpermissionComponent,
    PermissionformComponent,
    UserpermissionComponent,
    AddbranchComponent,
    BranchformComponent,
    EditbranchComponent,ListbranchComponent, AddprioritiesComponent, EditprioritiesComponent, ListprioritiesComponent, PrioritiesformComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ComponentsModule,
  FormsModule, ReactiveFormsModule, HttpClientModule
  ],
})
export class AdminModule {}
