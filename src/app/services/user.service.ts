import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/global';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) { }




// servicio de registro de usuario

    register(user: any): Observable<any> {
    return this.http.post(`http://localhost:3000/auth/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, user);
  }
  }