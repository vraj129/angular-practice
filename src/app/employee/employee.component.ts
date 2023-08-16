import { Component } from '@angular/core';
import { Employee, RootData } from '../data';
import { Data } from '../data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employeeData: RootData;
  employeeSearch: string = '';
  constructor() {
    let t = new Data();
    this.employeeData = JSON.parse(t.data);
  }

  getEmployee(): void {
    console.log(this.employeeSearch);

    this.employeeData.employees = this.employeeData.employees.filter(
      (element) =>
        element.firstName
          .toLowerCase()
          .indexOf(this.employeeSearch.toLowerCase()) === 0
    );
    if (this.employeeData.employees.length === 0) {
      let t = new Data();
      this.employeeData = JSON.parse(t.data);

      let t1: Employee[] = [];
      for (let i = 0; i < this.employeeData.employees.length; i++) {
        if (
          this.employeeData.employees[i].contactInfo.phone.includes(
            this.employeeSearch
          )
        ) {
          t1.push(this.employeeData.employees[i]);
        }
      }
      this.employeeData.employees = t1;
    }
  }

  resetData(): void {
    this.employeeSearch = '';
    let t = new Data();
    this.employeeData = JSON.parse(t.data);
  }
}
