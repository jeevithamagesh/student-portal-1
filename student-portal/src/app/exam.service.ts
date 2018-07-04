import { Injectable } from '@angular/core';
import { science } from './science'
import { english } from './english';
import { geography } from './geography';
import { history } from './history';
import { biology } from './biology';
import { maths } from './maths';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ExamService {

  constructor() { }
  getQues(sub) {

    let s = Number(sub);
    switch (s) {

      case 1: {
        return science;
      }
      case 2: {
        return english;
      }
      case 3: {
        return geography;
      }
      case 4: {
        return history;
      }
      case 5: {
        return maths;
      }
      case 6: {
        return biology;
      }
    }
  }
}
