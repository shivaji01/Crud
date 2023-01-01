import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../crudapi.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit {
  employyeform!: FormGroup;
  id: any = 0;
  actionname: string = '';//for single button create and update
  constructor(
     private fb: FormBuilder,
     private http: CrudapiService, 
     private route: Router, 
     private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formcollection();
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log('id', this.id);
    if (this.id) {
      this.actionname = "Update";//to update data
      this.http.getdataByID('EmpAlldata', this.id).subscribe(data => {
        this.employyeform.setValue(data);
        console.log("to update data Get", data);
      })
    }
    else {
      this.actionname = "Create";//to create new data
    }
  }
  formcollection() {
    this.employyeform = this.fb.group({
      id: [],
      fname: [''],
      lname: [''],
      designation: [''],
      salary: [''],
      company: ['']
    });
  }
  formsubmit() {
    // console.log(this.employyeform.value)
    if (this.actionname == 'Create') {
      this.http.postempData('EmpAlldata', this.employyeform.value).subscribe((el) => {
        //console.log(el);
        this.employyeform.reset();
        this.route.navigateByUrl('/showemp')
      })
    }
    else {
      this.http.updateempdata("EmpAlldata", this.employyeform.value).subscribe((el) => {
        console.log(el)
        this.route.navigateByUrl('/showemp');
      })
    }
  }
}
