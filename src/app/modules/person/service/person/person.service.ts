/**
 * Created by newmann on 2017/5/7.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {PersonModel} from "./person.model";
import 'rxjs/add/operator/map';
import {RestBaseService} from "../rest.base.service";

@Injectable()
export class PersonService extends RestBaseService{
  constructor(
    protected http:Http, protected authService: AuthService
  ){
    super(http,authService);
  }

  getPerson():Observable<PersonModel[]>{
    // get users from api
    return this.httpGet('/api/admin/users')
      .map((response: Response) => response.json());
  }
}
