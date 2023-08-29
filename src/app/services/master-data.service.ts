import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(private http:HttpClient) { }

  getAddressMaster(){
    const apiUrl = `https://localhost:5001/api/v1/master/address`;
    return this.http.get(apiUrl);
  }
}
