import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-stats",
  templateUrl: "./card-stats.component.html",
})
export class CardStatsComponent implements OnInit {

  public totalTweets: number = 0;
  @Input() timelineTweetsData: any;
  public topHashTagsList: Array<any> = [];

  constructor() { }

  ngOnInit(): void { this.getTop10HashTags() }

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

  getTop10HashTags() {
    setTimeout(() => {
      if (this.timelineTweetsData) {
        var totalTweets = this.timelineTweetsData?.meta?.result_count;
        this.totalTweets = totalTweets;

        if (this.timelineTweetsData?.data.length > 0) {
          for (let i = 0; i <= totalTweets; i++) {
            if (this.checkJsonProperties(this.timelineTweetsData?.data[i], 'entities')) {
              if (this.checkJsonProperties(this.timelineTweetsData?.data[i]?.entities, 'hashtags')) {
                if (this.timelineTweetsData?.data[i]?.entities?.hashtags.length > 0) {
                  this.timelineTweetsData?.data[i]?.entities?.hashtags.forEach(element => {
                    if (this.topHashTagsList.length > 0) {
                      let checkExistHashTag = this.topHashTagsList.filter((tags) => {
                        return tags.tag == element.tag
                      });

                      if (checkExistHashTag.length == 0) {
                        this.topHashTagsList.push(element);
                      }
                    } else {
                      this.topHashTagsList.push(element);
                    }
                  });
                }
              }
            }
          }
        }
      }
    }, 3000);
  }
}
