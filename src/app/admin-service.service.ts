import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationStatus } from "./AuthenticationStatus.model"; 


@Injectable({
    providedIn: 'root',
})

export class AdminServiceService {
//     constructor(private _http:HttpClient) { }

// public loginAdminFromRemote(adminlogin: AdminLogin):Observable<any> {
//     return this._http.post<any>("http://localhost:8088/api/v1/adminlogin", adminlogin)
//   }
//   handleError(error: Response){

    constructor(private httpClient: HttpClient) {}
    authenticated(
        username: string,
        password: string
    ): Observable<AuthenticationStatus> {
        let body = {
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AuthenticationStatus>(
            'http://localhost:9091/api/v1/adminlogin',
            body,
            {
                headers: headers,
            }
        );
    }
  }