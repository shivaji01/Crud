import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { productkey } from '../imgwrap/products';

interface productdata{
  BADGE_TYP:string;
  BADGE_DESC:string;
  IM_CODE:string;
  POST_FLAG:string;
  USER_ID:string;
  ID_KEY:number;
  IM_descr:string;
  IM_Salepr:string;
  im_path:string;
  im_path1:string;
  mrp:number;
  INTOBASQT:number;

}
@Component({
  selector: 'app-pcsofttask',
  templateUrl: './pcsofttask.component.html',
  styleUrls: ['./pcsofttask.component.scss']
})
export class PcsofttaskComponent implements OnInit {
  _Products: productkey=new productkey();
  _ShowProducts:any=[];
  _ShowProducts1:any=[];
  _ShowProducts2:any=[];
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
        this._ShowProducts=response;
       // console.log("hello",this._ShowProducts);
      })
      this.apihttp.getprodAPI1(this._Products).subscribe(response=>{
        console.log(response);
        this._ShowProducts1=response;
      })
      this.apihttp.getprodAPI2(this._Products).subscribe(response=>{
        console.log(response);
        this._ShowProducts2=response;
      })
    }
  
    formsubmit(){
  
    }
    
    
  }
