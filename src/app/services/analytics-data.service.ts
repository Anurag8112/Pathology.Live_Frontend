import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataService {

  constructor(private http:HttpClient) { }

  sampleCollectedGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/sample-collection?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  expensesGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/expenses?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  reportGeneratedGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/report-generated?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  testConductedGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/test-conducted?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  totalRevenueGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/total-revenue?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  netProfitGraph(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/analytics/net-profit?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }
}
