import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

import { environment } from 'src/environments/environment';

import {Response} from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private htpp: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>>{

    return this.htpp.get<Response<Moment[]>>(this.apiUrl);
  }

createMoment(formData:FormData): Observable<FormData>{
  return this.htpp.post<FormData>(this.apiUrl,formData);
}

}

