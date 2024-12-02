import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams
} from '@angular/common/http';
import { RouteConfig } from './route.config';

const TOKEN_KEY = "access_token";
@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient, private routeConfig: RouteConfig) { }


  getUrl(url: string) {
    return this.http.get<any>(url)
  }

  get(url: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.get<any>(this.routeConfig.Url(url), options)
  }

  post(url: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions = { headers: headers }
    let body = JSON.stringify(data);

    return this.http.post<any>(this.routeConfig.Url(url), body, httpOptions);
  }
  //######################## Http method to make anonymous request : End ##########################


  //######################## Http method to make authorize request : start ########################
  authGet(url: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem(TOKEN_KEY));
    const options = { headers: headers };

    return this.http.get<any>(this.routeConfig.Url(url), options);
  }

  authDelete(url: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem(TOKEN_KEY));
    const options = { headers: headers };

    return this.http.delete<any>(this.routeConfig.Url(url), options);
  }

  authPost(url: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem(TOKEN_KEY));
    const options = { headers: headers };
    let body = JSON.stringify(data);

    return this.http.post<any>(this.routeConfig.Url(url), body, options);
  }
  //######################## Http method to make authorize request : End ##########################
}
