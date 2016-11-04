import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IEmployee } from './employee/employee';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';

@Injectable()
export class EmployeeService {
  employees: Observable<IEmployee[]>;

  constructor(private http: Http) {
    this.employees = this.getEmployees();
      /*[{name: "Neil", title: "SVP"},
                      {name: "Richard", title: "Manager"}];*/
  }

  ngOnInit() { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get("http://localhost:8085/employees")
                    .map((response:Response) => {
      return response.json().map(function(emp) {
        return {id: emp.id,
                name: emp.first_name,
                title: emp.last_name};
      });
    });
  }

  add(employee: IEmployee): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("calling post");
    return this.http.post("http://localhost:8085/employees",
                   {first_name: employee.name, last_name: employee.title},
                   options);
  }
}
