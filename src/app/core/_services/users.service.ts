import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '../_models/user.model';
import { environment } from '../../../environment/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    private readonly consultaUserURL: string = '/Usuarios';
  
    constructor(private http: HttpClient) { }
  
    private get newUserURL() {
      return environment.getServiceUrl() + this.consultaUserURL;
    }
  
    GetUsers(): Observable<UserModel[]> {
        const endpointUrl = `${this.newUserURL}`;
        return this.http.get<UserModel[]>(endpointUrl);
    }
  }