import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbranchComponent } from './views/branches/addbranch.component';
import { EditbranchComponent } from './views/branches/editbranch.component';
import { ListbranchComponent } from './views/branches/listbranch.component';
import { AdddepartmentComponent } from './views/departments/adddepartment.component';
import { EditdepartmentComponent } from './views/departments/editdepartment.component';
import { ListdepartmentsComponent } from './views/departments/listdepartments.component';
import { AddtopicComponent } from './views/topics/addtopic.component';
import { EdittopicComponent } from './views/topics/edittopic.component';
import { ListtopicComponent } from './views/topics/listtopic.component';
import { AddpermissionComponent } from './views/permission/addpermission.component';
import { EditpermissionComponent } from './views/permission/editpermission.component';
import { ListpermissionComponent } from './views/permission/listpermission.component';
import { UserpermissionComponent } from './views/permission/userpermission.component';
import { AdduserComponent } from './views/users/adduser.component';
import { EdituserComponent } from './views/users/edituser.component';
import { ListusersComponent } from './views/users/listusers.component';
import { AddprioritiesComponent } from './views/priorities/addpriorities.component';
import { EditprioritiesComponent } from './views/priorities/editpriorities.component';
import { ListprioritiesComponent } from './views/priorities/listpriorities.component';

const routes: Routes = [
  {
    path:'branch',
    children:[
      {
        path:'add',
        component: AddbranchComponent
      },
      {
        path:'edit/:id',
        component: EditbranchComponent
      },
      {
        path:'list',
        component: ListbranchComponent
      }
    ]    
  },
  {
    path:'department',
    children:[
      {
        path:'add',
        component: AdddepartmentComponent
      },
      {
        path:'edit/:id',
        component: EditdepartmentComponent
      },
      {
        path:'list',
        component: ListdepartmentsComponent
      }
    ]    
  },
  {
    path:'topics',
    children:[
      {
        path:'add',
        component: AddtopicComponent
      },
      {
        path:'edit/:id',
        component: EdittopicComponent
      },
      {
        path:'list',
        component: ListtopicComponent
      }
    ]    
  },
  {
    path:'permission',
    children:[
      {
        path:'add',
        component: AddpermissionComponent
      },
      {
        path:'edit/:id',
        component: EditpermissionComponent
      },
      {
        path:'list',
        component: ListpermissionComponent
      },
      {
        path:'user/:id',
        component: UserpermissionComponent
      }
    ]    
  },
  {
    path:'users',
    children:[
      {
        path:'add',
        component: AdduserComponent
      },
      {
        path:'edit/:id',
        component: EdituserComponent
      },
      {
        path:'list',
        component: ListusersComponent
      }
    ]    
  },
  {
    path:'priority',
    children:[
      {
        path:'add',
        component: AddprioritiesComponent
      },
      {
        path:'edit/:id',
        component: EditprioritiesComponent
      },
      {
        path:'list',
        component: ListprioritiesComponent
      }
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
