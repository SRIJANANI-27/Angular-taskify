import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../../../service/chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  constructor(private service:ChartService){}
  data:any;
  dataamount:any[]=[];
  datayear:any[]=[];
  datacolor:any[]=[];
  databorder:any[]=[];
  
  ngOnInit(): void {
  
    this.service.showdata().subscribe(res=>{
      // console.log(res);
      this.data=res;
      if(this.data!=null){
        for(let i=0;i<this.data.length;i++){
          this.datayear.push(this.data[i].year);
          this.datacolor.push(this.data[i].color);
          this.databorder.push(this.data[i].borderColor);
          // console.log(this.datayear);
          
        }
      }
    })
    this.showchartData(this.datayear,this.datacolor,this.databorder);
   
  }
  showchartData(datayear: any, databorder: any, datacolor: any) {
    console.log(datayear);
  
    // Create a bar chart
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: datayear,
        datasets: [{
          label: 'Task',
          data: [20, 19, 80, 81, 56, 55, 20], // Example data
          backgroundColor: databorder,
          borderColor: datacolor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
