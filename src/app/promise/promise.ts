import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.html'
  
})
export class PromiseComponent {

  resultPromise: Promise<string> = new Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve('YES');
    }, 7000);

  });

}
