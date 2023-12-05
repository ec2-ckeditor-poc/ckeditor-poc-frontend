import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VisitorCount } from '../models/visitor-count.model';
import { apiURL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private httpClient: HttpClient) { 
  }

  getVisitorCount() {
    return this.httpClient.get<VisitorCount>(apiURL);
  }
}
