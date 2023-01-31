import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudapiService } from '../crudapi.service';
import { emptype } from '../emp';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit {
  allempshow: emptype[] = [];
  constructor(private http: CrudapiService, private route: Router) { }
  ngOnInit(): void {
    this.getempall();
  }
  getempall() {
    this.http.getempdata('EmpAlldata').subscribe((el: any) => {
      console.log(el)
      this.allempshow = el;
      //console.log(this.allempshow)
    });
  }
  UpdateEmp(id: number) {
    this.route.navigate(['/update', id]);
  }
  DeleteEmployee(id: number, i: number) {
    this.http.DeleteEmpdata("EmpAlldata", id).subscribe(res => {
      console.log(res);
      this.allempshow.splice(i, 1);
    });
  }

  sortBysalByHightoLow(){
    this.allempshow.sort((a:any,b:any)=>(a.salary > b.salary) ? 1 : -1);
  }
  
  sortBysalByLowtoHigh(){
    this.allempshow.sort((a:any,b:any)=>(b.salary > a.salary) ? 1 : -1);
  }
}
