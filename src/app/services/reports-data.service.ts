import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyData } from '../add-reports/add-reports-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsDataService {

  constructor(private http:HttpClient) { }

  generateReports(dataToSend: MyData): Observable<any> {
    const apiUrl = 'https://localhost:5001/api/v1/report';
    return this.http.post(apiUrl, dataToSend);
  }

  getAllTests(){
    const apiUrl = `https://localhost:5001/api/v1/report/tests`;
    return this.http.get(apiUrl);
  }

  getTestComponents(testid:string){
    const apiUrl = `https://localhost:5001/api/v1/report/tests/components?testid=${testid}`;
    return this.http.get(apiUrl);
  }

}
