import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/views/auth/services/auth.service";
import { TweetsService } from "../services/tweets.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {

  public userData: any;

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getTwitterAuthUser();
  }

  getTwitterAuthUser() {
    this._authService.getTwitterUserMe().then(data => {
      if (data.Success) {
        if (data.Model) {
          localStorage.setItem("_id", data.Model.data.id);
          this.userData = data.Model.data;
        }
      } else {
        localStorage.clear();
        this._router.navigateByUrl("/auth/login");
      }
    });
  }
}
