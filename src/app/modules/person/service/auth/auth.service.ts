/**
 * Created by newmann on 2017/5/6.
 *
 * copy from https://github.com/auth0-blog/angular-2-authentication-tutorial
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class AuthService{
  public token:String;
  public personId:String;
  private headers:Headers;
  private options:RequestOptions;

  constructor(private http: Http) {
    // set token if saved in local storage
    var currentPerson = JSON.parse(localStorage.getItem('currentPerson'));
    this.token = currentPerson && currentPerson.token;
    // set request options
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });

  }

  login(userName: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:8080/api/person/login', JSON.stringify({ userName: userName, password: password }),this.options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        // let token = response.json() && response.json().token;

        if (response) {
          this.token = response.json().token;
          this.personId = response.json().id;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentPerson', JSON.stringify({ userName: userName, token: this.token,id : this.personId }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentPerson');
  }

}
