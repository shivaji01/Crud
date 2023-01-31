import { Injectable } from '@angular/core';
import { leadsinfo } from './leaddata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { productkey } from './imgwrap/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// 	tokenkey="sdjfsofnge560efn934y3924y329y5643t;
// const httpOptions={
// 	Headers:new HttpHeaders({
// 		'Content-Type: application/json',
// 		Authorization: `Bearer +{this.tokenkey}`
// 		})
// 	}
  //Baselink='https://app.ieverp.com/CRM/API/Lead/GetAllLeads'
  URL="http://app.ieverp.com/abt/api/home/GetPrdoftheday";
  URL1="http://app.ieverp.com/abt/api/home/Getnewarrival";
  URL2="http://app.ieverp.com/abt/api/home/GetBestSellerproduct";
  constructor(private http:HttpClient ) { }
  // getallleads(_leads:leadsinfo){
  //   return this.http.post<any>(this.Baselink , _leads,);
  // }



  getprodAPI(_prod:productkey){
    return this.http.post<any>(this.URL,_prod);
  }
  getprodAPI1(_prod:productkey){
    return this.http.post<any>(this.URL1,_prod);
  }
  getprodAPI2(_prod:productkey){
    return this.http.post<any>(this.URL2,_prod);
  }

}
