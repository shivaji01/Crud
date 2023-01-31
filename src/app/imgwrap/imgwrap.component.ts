import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productkey } from './products';
import * as $ from 'jquery';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// interface productdata{
//   BADGE_TYP:string;
//   BADGE_DESC:string;
//   IM_CODE:string;
//   POST_FLAG:string;
//   USER_ID:string;
//   ID_KEY:number;
//   IM_descr:string;
//   IM_Salepr:string;
//   im_path:string;
//   im_path1:string;
//   mrp:number;
//   INTOBASQT:number;

//}
@Component({
  selector: 'app-imgwrap',
  templateUrl: './imgwrap.component.html',
  styleUrls: ['./imgwrap.component.scss']
})
export class ImgwrapComponent implements OnInit {
_Products: productkey=new productkey();
_ShowProducts:any=[];
employyeform!:FormGroup;
starRating = 0;
  constructor( private apihttp:ApiService, private fb:FormBuilder) { }

// employyeform = new FormGroup
// ({
//   name: new FormControl('' ,[Validators.required ] ),
//   password: new FormControl('' , [Validators.required, Validators.minLength(4)] )
// })
  ngOnInit(): void {
    this.employyeform=this.fb.group({
      name:['', Validators.required],
      password:['', Validators.required],
  });
  //  $(function(){
  //     (<any>$("#container1")).twentytwenty();
  //   });
    this.GetAllProducts();
  }

  GetAllProducts(){
    this._Products.PARTY_NO='G0042';
    this._Products.PARTY_ST="D";
    this.apihttp.getprodAPI(this._Products).subscribe(response=>{
      console.log(response);
    })
  }

  formsubmit(){

  }
  
}
