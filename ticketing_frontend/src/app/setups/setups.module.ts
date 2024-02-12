import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupsRoutingModule } from './setups-routing.module';
import { AppsetupComponent } from './views/appsetup.component';
import { CompanysetupComponent } from './views/companysetup.component';
import { ComponentsModule } from '../components/views/components.module';


@NgModule({
  declarations: [
    AppsetupComponent,
    CompanysetupComponent
  ],
  imports: [
    CommonModule,
    SetupsRoutingModule,
    ComponentsModule
  ]
})
export class SetupsModule { }
