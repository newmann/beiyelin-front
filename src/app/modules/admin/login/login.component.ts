import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../common/auth/auth.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  private loginError:String;
  public form:FormGroup;
  public userName:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private router:Router, private auth:AuthService,private translate: TranslateService) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      this.auth.login(this.userName.value,this.password.value)
        .subscribe(result=>{
          if(result ===true){
            this.router.navigate(["/admin"]);
          } else {
            this.translate.get("admin.LoginComponent.loginError")
              .subscribe(msg =>{
                this.loginError = msg;
              });
             this.submitted =false;
          }
        });

    }
  }
}
