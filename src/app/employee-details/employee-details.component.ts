import { Component, Input } from '@angular/core';
import { IEmployee } from '../employee/employee'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  @Input() employee: IEmployee;
}
