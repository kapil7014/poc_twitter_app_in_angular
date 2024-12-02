import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit {

  @Input() timelineTweetsData: any;
  @Input() timelineTweetsList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  checkJsonProperties(entities: any, keyName: any): boolean {
    if (entities && keyName) {
      if (entities.hasOwnProperty(keyName)) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

  getUserProfileDetails(authorId: any) {
    if (this.timelineTweetsData) {
      if (this.checkJsonProperties(this.timelineTweetsData?.includes, "users")) {
        if (this.timelineTweetsData?.includes?.users.length > 0) {
          let findUser = this.timelineTweetsData?.includes?.users?.filter((user) => {
            return user.id == authorId;
          });

          return findUser[0];
        }
      }
    }
  }

  getMediaDetails(mediaKey: any) {
    if (this.timelineTweetsData) {
      if (this.checkJsonProperties(this.timelineTweetsData?.includes, "media")) {
        if (this.timelineTweetsData?.includes?.media.length > 0) {
          let findMedia = this.timelineTweetsData?.includes?.media?.filter((media) => {
            return media.media_key == mediaKey;
          });

          return findMedia[0];
        }
      }
    }
  }
}
