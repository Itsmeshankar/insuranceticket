import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenRoutingModule } from './authen-routing.module';
import { LoginComponent } from './views/login.component';
import { ComponentsModule } from '../components/views/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenRoutingModule, 
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AuthenModule { }
