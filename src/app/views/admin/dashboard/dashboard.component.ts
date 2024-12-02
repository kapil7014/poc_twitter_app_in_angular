import { Component, OnInit } from "@angular/core";
import { TweetsService } from "src/app/layouts/services/tweets.service";
import { AuthService } from "../../auth/services/auth.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  public timelineTweetsData: any;
  public timelineTweetsList: Array<any> = [];

  constructor(private _authService: AuthService, private _tweetsService: TweetsService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    if (localStorage.getItem("_id")) {
      this.getTimeLineTweetsList(localStorage.getItem("_id"));
    } else {
      this.getTwitterAuthUser();
    }
  }

  getTwitterAuthUser() {
    this._authService.getTwitterUserMe().then(data => {
      if (data.Success) {
        if (data.Model) {
          this.getTimeLineTweetsList(data.Model.data.id);
        }
      }
    });
  }

  getTimeLineTweetsList(userId: any) {
    this._spinner.show();
    this._tweetsService.getReverseTimelineTweets(userId).then(data => {
      this._spinner.hide();
      if (data.Success) {
        if (data.Model) {
          this.timelineTweetsData = data.Model;
          this.timelineTweetsList = data.Model.data;
        }
      } else {
        alert("Not authorised. " + data.ErrorMessage);
      }
    }).catch((error) => {
      this._spinner.hide();
    });
  }
}
