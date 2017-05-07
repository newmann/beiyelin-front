import {AuthService} from "./auth/auth.service";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
/**
 * Created by newmann on 2017/5/7.
 * 与后台服务数据交换的抽象类
 * 1、处理token
 * 2、处理header
 * 3、注册公用的service
 */
export abstract class RestBaseService{
  protected headers:Headers;
  protected options:RequestOptions;

  constructor(
    protected http:Http, protected authService: AuthService
  ){
    this.headers = new Headers({ 'id': this.authService.token,
                                  'token': this.authService.token,
                                  'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });
  }

  httpGet(url:string): Observable<Response>{
    return this.http.get(url,this.options);
  }

  httpPost(url:string, data:any):Observable<Response>{
    return this.http.post(url,data,this.options);
  }
}
