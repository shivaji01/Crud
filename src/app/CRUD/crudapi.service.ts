import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emptype } from './emp';

@Injectable({
  providedIn: 'root'
})
export class CrudapiService {
  BaseUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
  postempData(endpoint: string, data: any,) {
    //   let headers = new HttpHeaders();
    //  headers= headers.set('Content-type','application-json');
    // const httpdata = {
    //   Headers: new HttpHeaders({
    //     'content-type': 'application/json',
    //     'authorization': 'Bearer sdfjslfhoewrnwefnkasf'
    //   })
    // }
    return this.http.post<emptype[]>(this.BaseUrl + endpoint, data,  {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    });
  }
  getempdata(endpoint: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application-json');
    return this.http.get<emptype[]>(this.BaseUrl + endpoint, {'headers':headers});
  }
  getdataByID(endpoint:string,id:number){
    let headers=new HttpHeaders();
    headers=headers.set('Content-type', 'application-json');
    return this.http.get<emptype[]>(this.BaseUrl + endpoint+"/"+id,{'headers':headers})
  }
  updateempdata(endponit:string, empdata:emptype) {
      return this.http.put<emptype[]>(this.BaseUrl+endponit+"/"+empdata.id,empdata);
  }
  DeleteEmpdata(endponit:string,id:number){
      return this.http.delete(this.BaseUrl+endponit+"/"+id)
  }
}
