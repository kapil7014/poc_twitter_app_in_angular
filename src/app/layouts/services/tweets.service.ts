import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';

@Injectable()
export class TweetsService {
  constructor(private _httpClient: HttpClientService) { }

  getReverseTimelineTweets(userId: any) {
    return this._httpClient.authGet('/Tweets/GetReverseTimelineTweets?userId=' + userId).toPromise();
  }
}
