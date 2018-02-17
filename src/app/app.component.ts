import {Component, OnInit} from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {Sessions} from './sessions.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  session;


  constructor(private apiservice: ApiserviceService){}

  ngOnInit() {
    this.CollectArchive();
  }

  CollectArchive() {
    this.apiservice.GetArchivedSensordata().subscribe(data => this.session = (data));

}}


