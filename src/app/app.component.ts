import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from './api.service';
import { leadsinfo } from './leaddata';
Chart.register(...registerables);
interface Data {
  lead_no: number;
  leadtitle: string;
  doc_date: string;
  party_no: string;
  party_name: string;
  DueOn: string;
  leadtype: string;
  lead_descr: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _Lead: leadsinfo = new leadsinfo();
  newdata: any = [];
  
  title:any

  constructor(private api: ApiService) { }
  lead_descr = "Demo";
  aaaa: any
  ngOnInit(): void {
    this.ChartData();
    //this.apileadspost();
    

  }

  // apileadspost() {
  //   this._Lead.APARTY_NO = "00182";
  //   this._Lead.DOC_TYPE = "LA";
  //   this.api.getallleads(this._Lead).subscribe(res => {
  //     this.newdata = res.data;
  //     if (this.newdata != null) {
        
  //           console.log(this.newdata);
  //     }})
  // }


  ChartData() {
    const ctx = document.getElementById('myChart');

    // new Chart("myChart", {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });

  }
}

