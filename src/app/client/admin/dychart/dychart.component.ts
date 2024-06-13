import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

interface Post {
  month: string;
  assigned: number;
  inprogress: number;
  completed: number;
}
@Component({
  selector: 'app-dychart',
  templateUrl: './dychart.component.html',
  styleUrl: './dychart.component.scss'
})
export class DychartComponent {
  config: any; 
  data: any;
  selectedMonth: string = 'January'; 
  postsData: any; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
    this.initializeChart();
  }

  initializeChart() {
    
    this.data = {
      labels: ['Task Assigned', 'In-progress', 'Completed'],
      datasets: [{
        label: 'My First Dataset',
        data: [0, 0, 0], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Red
          'rgba(54, 162, 235, 0.2)', // Blue
          'rgba(255, 206, 86, 0.2)', // Yellow
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Red
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 206, 86, 1)', // Yellow
        ],
        borderWidth: 1,
        
        
        hoverOffset: 4
      }]
    };

  
    this.config = {
      type: 'pie',
      data: this.data,
      options: {}
    };

   
    const canvas = document.getElementById('Chart2') as HTMLCanvasElement;
    new Chart(canvas, this.config);

  
    this.fetchData();
  }

  fetchData() {
    
    this.http.get<Post[]>('http://localhost:3000/posts6').subscribe(data => {
      
      const filteredData = data.filter((item: Post) => item.month === this.selectedMonth);
      if (filteredData.length > 0) {
       
        const post = filteredData[0]; 
        this.data.datasets[0].data = [post.assigned, post.inprogress, post.completed];
        this.updateChart();
      }
    });
  }

  updateChart() {
   
    const canvas = document.getElementById('Chart2') as HTMLCanvasElement;
  
  
    const existingChart = Chart.getChart(canvas);
  
  
    if (existingChart) {
      existingChart.destroy();
    }
  
   
    const chart = new Chart(canvas, this.config);
  }
  
  
  onMonthChange(event: any) {
    const selectedValue = event.target.value;
    this.selectedMonth = selectedValue;
    this.fetchData();
}
}
