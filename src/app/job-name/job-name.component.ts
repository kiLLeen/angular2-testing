import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from '../employee/employee'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.css']
})
export class JobNameComponent implements OnInit {
  employeeForm: FormGroup;
  @Output() employeeListChange = new EventEmitter<IEmployee[]>();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  submit() {
    this.employeeService.add({
      id: 0,
      name: this.employeeForm.value.name,
      title: this.employeeForm.value.title
    }).subscribe(employeeList => {
      console.log(employeeList);
      this.employeeService.getEmployees()
                          .subscribe(employees => {
        this.employeeListChange.emit(employees);
      });
    });
  }
}
