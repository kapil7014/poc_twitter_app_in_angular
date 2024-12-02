import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService, private _activeRoute: ActivatedRoute, private _spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._activeRoute.queryParams.subscribe(params => {
      if (params["code"]) {
        this.getTwitterAccessToken(params["code"]);
      }
    });
  }

  loginWithTwitter() {
    this._authService.login().then(data => {
      window.location.href = data.LoginUrl;
    });
  }

  getTwitterAccessToken(authCode: string) {
    this._spinner.show();
    this._authService.twitterAccessToken(authCode).then(data => {
      this._spinner.hide();
      if (data.Success) {
        if (data.Model) {
          if (data.Model.access_token && data.Model.refresh_token) {
            localStorage.setItem("refresh_token", data.Model.refresh_token);
            localStorage.setItem("access_token", data.Model.access_token);
            this._router.navigateByUrl("/user/home");
          }
        }
      } else {
        alert("Not authorised. " + data.ErrorMessage);
      }
    }).catch((error) => {
      this._spinner.hide();
    });
  }

}
