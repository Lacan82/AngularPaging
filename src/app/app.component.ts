import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {Sessions} from './sessions.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  session = [];

  sessionCount = 0;
  cursor = [];
  more: boolean;



  constructor(private apiservice: ApiserviceService) {
  }

  ngOnInit() {
      this.CollectArchive();
    // const iterator = Observable.interval(1000);
    // iterator.subscribe(() => {
    //   if (this.more === true) { this.CollectArchive(); console.log('running');
    //   this.sessionCount += this.session.length; } else { this.sessionCount += this.session.length; }
    // }
  }

  CollectArchive() {
    this.apiservice.GetArchivedSensordata(this.cursor[this.cursor.length - 1]).subscribe(data => {this.session = this.session.concat(data);
    this.cursor.push(this.apiservice.cursor);
    this.more = this.apiservice.more;
    });

}
  // ngDoCheck() {
  //   if (this.more === true) {
  //     this.apiservice.GetArchivedSensordata(this.cursor).subscribe(data => {this.session = (data);
  //       this.cursor = data['cursor']['cursor'];
  //       this.more = data['more'];
  //       console.log(this.session);
  //     } );
  //   }
  // }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
     }



}

