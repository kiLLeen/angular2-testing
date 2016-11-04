import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../employee/employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {
  employeeList: IEmployee[];
  selectedEmployee: IEmployee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
                        .subscribe(employees => {
      this.employeeList = employees;
    });
  }

  setEmployee(employee: IEmployee) {
    this.selectedEmployee = employee;
  }

  setEmployeeList(employees: IEmployee[]) {
    this.employeeList = employees;
  }
}
