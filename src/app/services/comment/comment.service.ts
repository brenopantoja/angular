import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Coment } from 'src/app/Coment';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Coment): Observable<Response<Coment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Coment>>(url, data);
  }
}
