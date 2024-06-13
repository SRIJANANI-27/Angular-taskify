import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../../../../service/chart.service';
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrl: './chart3.component.scss'
})
export class Chart3Component {
  constructor(private service: ChartService) { }
  data: any;
  dataamount: any[] = [];
  datayear: any[] = [];
  datacolor: any[] = [];
  databorder: any[] = [];

  ngOnInit(): void {

    this.service.showdata().subscribe(res => {
      // console.log(res);
      this.data = res;
      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.datayear.push(this.data[i].year);
          this.datacolor.push(this.data[i].color);
          this.databorder.push(this.data[i].borderColor);
          // console.log(this.datayear);

        }
      }
    })
    this.showchartData(this.datayear, this.datacolor, this.databorder);

  }
  showchartData(datayear: any, databorder: any, datacolor: any) {
    console.log(datayear);

    // Create a bar chart
    new Chart("myChartss", {
      type: 'radar',
      data: {
        labels: datayear,
        datasets: [{
          label: 'Task 1',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'Task 2', // Label for the second dataset
          data: [60, 40, 70, 50, 80, 75, 65], // Example data for Task 2
          fill: true,// Specify border color for Task 2
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
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