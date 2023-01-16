import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  constructor(private httpClient: HttpClient) { }

  getQuoteRequest(){
    return this.httpClient.get('assets/QuoteRequest.json');
  }
}
