import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private HttpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.HttpClient.get(
      'https://data.binance.com/api/v3/ticker/24hr'
    );
  }
}
