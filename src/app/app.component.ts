import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { EditorModule } from './editor/editor.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { VisitorCount } from './models/visitor-count.model';
import { VisitorService } from './services/visitor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,  EditorModule],
  providers:[VisitorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  contentModel: any;
 
  title = 'dev-angular-ckeditor5';
  visitorCount$?: Observable<number>;

  constructor(private visitorService: VisitorService) {
    this.visitorCount$ = this.visitorService.getVisitorCount().pipe(
      map(visitor => visitor.visitor_count)
    )  
  }
}