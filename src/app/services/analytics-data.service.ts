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
}
