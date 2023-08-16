import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ButtonModule, CardModule, FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
];
@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    FormModule,
    ButtonModule,
    FormsModule,
    BrowserModule,
  ],
})
export class EmployeeModule {}
