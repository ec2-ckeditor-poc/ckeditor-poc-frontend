import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VisitorCount } from '../models/visitor-count.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private httpClient: HttpClient) { 
  }

  getVisitorCount() {
    return this.httpClient.get<VisitorCount>('https://15ruwybtx6.execute-api.us-east-1.amazonaws.com/Stage/visitorCount');
    // return of({visitor_count: Math.random()})
  }
}
