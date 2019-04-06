
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './users.model';

const httpOptions= {
 headers: new HttpHeaders({
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers" : "Content-Type",
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE",
 })
};

@Injectable()
export class UsersService {

    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = 'https://medicalappointmentapi.azurewebsites.net/api/User';
    }
    get(id: string) {
        let requestUrl = this.baseUrl + "/" + id;
        return this.http.get(requestUrl, httpOptions);
    }
    getAll() {
        return this.http.get(this.baseUrl,httpOptions);
    }
    delete(id: string) {
        let requestUrl = this.baseUrl + "/" + id;
        return this.http.delete(requestUrl, httpOptions);
    }
    addUpdate(body: UserModel) {
        if (body.userId) {
            let requestUrl = this.baseUrl + "/" + body.userId;
            return this.http.put(requestUrl, body, httpOptions);
        } else {
            return this.http.post(this.baseUrl, body, httpOptions);
        }
    }
}