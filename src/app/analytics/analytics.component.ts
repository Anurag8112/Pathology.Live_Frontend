import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { AnalyticsDataService } from '../services/analytics-data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  activeTab: string = 'today';
  samplecollectedgraphData: any;
  expensesgraphData :any;

  sampleCollectedChartInitialized = false;
  expensesChartInitialized = false;

  constructor(private samplecollected: AnalyticsDataService) {
    this.samplecollectedgraphData = {};
  }

  ngOnInit() {
    this.samplecollected.sampleCollectedGraph(1).pipe(
      tap((data: any) => {
        this.samplecollectedgraphData = data;
        this.sampleCollection();
      })
    ).subscribe();

    this.samplecollected.expensesGraph(1).pipe(
      tap((data: any) => {
        this.expensesgraphData=data;
        this.expanceChart();
      })
    ).subscribe();
  }

  onClickToday() {
    this.activeTab = 'today';
    // Call the dashboard() method with parameter 1 for "Today"
    this.samplecollected.sampleCollectedGraph(1).pipe(
      tap((data: any) => {
        this.samplecollectedgraphData = data;
        this.expensesgraphData=data;
        this.sampleCollection();
        this.expanceChart();
      })
    ).subscribe();

    this.samplecollected.expensesGraph(1).pipe(
      tap((data: any) => {
        this.expensesgraphData=data;
        this.expanceChart();
      })
    ).subscribe();
  }

  onClickThisWeek() {
    this.activeTab = 'thisWeek';
    // Call the dashboard() method with parameter 2 for "This Week"
    this.samplecollected.sampleCollectedGraph(2).pipe(
      tap((data: any) => {
        this.samplecollectedgraphData = data;
        this.expensesgraphData=data;
        this.sampleCollection();
        this.expanceChart();
      })
    ).subscribe();

    this.samplecollected.expensesGraph(2).pipe(
      tap((data: any) => {
        this.expensesgraphData=data;
        this.expanceChart();
      })
    ).subscribe();
  }

  onClickThisMonth() {
    this.activeTab = 'thisMonth';
    // Call the dashboard() method with parameter 3 for "This Month"
    this.samplecollected.sampleCollectedGraph(3).pipe(
      tap((data: any) => {
        this.samplecollectedgraphData = data;
        this.expensesgraphData=data;
        this.sampleCollection();
        this.expanceChart();
      })
    ).subscribe();

    this.samplecollected.expensesGraph(3).pipe(
      tap((data: any) => {
        this.expensesgraphData=data;
        this.expanceChart();
      })
    ).subscribe();
  }

  sampleCollection() {
    if (!this.sampleCollectedChartInitialized) {
      const lineChartCtx = document.getElementById('lineChart') as HTMLCanvasElement;
      new Chart(lineChartCtx, {
        type: 'line',
        data: {
          labels: this.samplecollectedgraphData.labels,
          datasets: this.samplecollectedgraphData.graphData,
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      this.sampleCollectedChartInitialized = true;
    }
  }

  expanceChart(){
    if (!this.expensesChartInitialized) {
      const expensesChart = document.getElementById('Expenseschart') as HTMLCanvasElement;
      new Chart(expensesChart, {
        type: 'line',
        data: {
          labels: this.expensesgraphData.labels,
          datasets: this.expensesgraphData.graphData,
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      this.expensesChartInitialized = true;
    }
  }
  
  

  //Report Generated Chart
  public reportGeneratedOptions: ChartOptions = {
    responsive: false,
  };
  public reportGeneratedLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','q','d','g','g','f'];
  public reportGeneratedType: ChartType = 'bar';
  public reportGeneratedLegend = true;
  public reportGeneratedData: ChartDataset[] = [
    {
      data: [10, 20, 18, 12,20,25,18,25,30,27,22,35],
      label: 'Sales',
      backgroundColor: [
        'rgba(81, 168, 255,0.8)',
      ],
      
      borderWidth: 0
    },
    {
      data: [23, 20, 53, 12,20,44,18,25,21,27,22,35],
      label: 'Profit',
      backgroundColor: [
        'rgba(81, 23, 255,0.8)',
        
      ],
      
      borderWidth: 0
    }
  ];

  //Test Conducted Chart
  public TestConductedOptions: ChartOptions = {
    responsive: false,
  };

  public TestConductedLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public TestConductedType: ChartType = 'bar';
  public TestConductedLegend = true;
  public TestConductedData: ChartDataset[] = [
    {
      data: [10, 20, 18, 12,20,25,18],
      label: 'Sales',
      backgroundColor: [
        'rgba(81, 168, 255,0.8)',
      ],
      
      borderWidth: 0
    },
    {
      data: [23, 20, 53, 12,20,44,18],
      label: 'Profit',
      backgroundColor: [
        'rgba(81, 23, 255,0.8)',
        
      ],
      
      borderWidth: 0
    }
  ];

  // Total Revenue Chart
  public TotalRevenueOptions: ChartOptions = {
    responsive: false,
  };

  public TotalRevenueLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public TotalRevenueType: ChartType = 'bar';
  public TotalRevenueLegend = true;
  public TotalRevenueData: ChartDataset[] = [
    {
      data: [10, 20, 18, 12,20,25,18],
      label: 'Sales',
      backgroundColor: [
        'rgba(81, 168, 255,0.8)',
      ],
      
      borderWidth: 0
    },
    {
      data: [23, 20, 53, 12,20,44,18],
      label: 'Profit',
      backgroundColor: [
        'rgba(81, 23, 255,0.8)',
        
      ],
      
      borderWidth: 0
    }
  ];

  // Net  Profit Chart
  public NetProfitOptions: ChartOptions = {
    responsive: false,
  };

  public NetProfitLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public NetProfitType: ChartType = 'bar';
  public NetProfitLegend = true;
  public NetProfitData: ChartDataset[] = [
    {
      data: [10, 20, 18, 12,20,25,18],
      label: 'Sales',
      backgroundColor: [
        'rgba(81, 168, 255,0.8)',
      ],
      
      borderWidth: 0
    },
    {
      data: [23, 20, 53, 12,20,44,18],
      label: 'Profit',
      backgroundColor: [
        'rgba(81, 23, 255,0.8)',
        
      ],
      
      borderWidth: 0
    }
  ];

  ngAfterViewInit() {
    

    
  }
}
