import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Sessions } from './sessions.model';
import { ConstantsService } from './constants.service';
import 'rxjs/add/operator/map';



@Injectable()
export class ApiserviceService {
  cursor;
  more: boolean;

  constructor(private http: HttpClient,
              private base_url: ConstantsService) { }
  GetArchivedSensordata(cursor = '') {
    return this.http.get<Sessions[]>( this.base_url.BaseUrl() + '/read?cursor=' + cursor)
      .map(
        (response) => {
          const result = response['items'];
          this.cursor = response['cursor']['cursor'];
          this.more = response['more'];
          console.log(result);
          return result;
        }

      );
  }
}
