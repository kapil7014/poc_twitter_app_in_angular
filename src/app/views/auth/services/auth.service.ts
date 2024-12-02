import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClientService) { }

  login() {
    return this._httpClient.get('/TwitterToken/TwitterLoginUrl').toPromise();
  }

  twitterAccessToken(authCode: string) {
    return this._httpClient.get('/TwitterToken/GetTwitterAccessToken?code=' + authCode).toPromise();
  }

  getTwitterUserMe() {
    return this._httpClient.authGet('/TwitterToken/GetTwitterAuthUser').toPromise();
  }
}
