import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http:HttpClient) { }

  dashboard(timeframe: number){
    const apiUrl = `https://localhost:5001/api/v1/dashboard/data?timeframe=${timeframe}`;
    return this.http.get(apiUrl);
  }

  recentReports(limit: number, offset: number) {
    const apiUrl = `https://localhost:5001/api/v1/dashboard/datalist?limit=${limit}&offset=${offset}`;
    return this.http.get(apiUrl);
  }  
}
