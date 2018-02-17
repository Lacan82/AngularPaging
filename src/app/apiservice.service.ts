import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {async} from 'rxjs/scheduler/async';

@Injectable()
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  GetArchivedSensordata() {
    return this.http.get('https://sensordata-dot-hyperwave-168417.appspot.com/_ah/api/sessions/v1/read/')
      .map(
        (response) => {

          return response;
        }

      );
  }



}
