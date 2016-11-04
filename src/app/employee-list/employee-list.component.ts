import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../employee/employee'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employees: IEmployee[];
  @Output() selectEmployee = new EventEmitter<IEmployee>();
}
