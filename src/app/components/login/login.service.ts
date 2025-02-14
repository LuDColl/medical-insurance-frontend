import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  private readonly apiUrl = `${environment.apiUrl}/auth`;

  login(dto: { name: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, dto, {
      responseType: 'text',
    });
  }
}
