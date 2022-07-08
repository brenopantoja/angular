import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private htpp: HttpClient) { }

createMoment(formData:FormData): Observable<FormData>{
  return this.htpp.post<FormData>(this.apiUrl,formData);
}

}

