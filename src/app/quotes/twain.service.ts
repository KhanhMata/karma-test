import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TwainService {

  twainQuote = 'I am handsome';

  constructor() { }

  getQuote(): Observable<string> {
    return of(this.twainQuote);
  }
}
