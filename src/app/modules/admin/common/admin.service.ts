/**
 * Created by newmann on 2017/5/7.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {Observable} from "rxjs";
import {AdminModel} from "./models/admin";
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService{
  constructor(
    private http:Http, private authService: AuthService
  ){}

  getAdmin():Observable<AdminModel[]>{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/admin/users', options)
      .map((response: Response) => response.json());

  }
}
