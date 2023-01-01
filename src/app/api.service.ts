import { Injectable } from '@angular/core';
import { leadsinfo } from './leaddata';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  Baselink='https://app.ieverp.com/CRM/API/Lead/GetAllLeads'
  
  constructor(private http:HttpClient ) { }

  getallleads(_leads:leadsinfo){
    return this.http.post<any>(this.Baselink , _leads,);
  }
}
