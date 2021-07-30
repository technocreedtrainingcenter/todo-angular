import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  student: any = '';
  title = 'todo-angular';

  constructor() {
    // this.message();
    // this.messageNew();
    this.synchrounus();
  }

  message() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  }

  
  messageNew() {
    setTimeout(() => {
      console.log(1);
      console.log(2);
    }, 1000)
    console.log(3);
    console.log(4);
    console.log(5);
  }

  synchrounus() {
    new Promise((resolve, reject) => {
  
      setTimeout(() => {
        console.log(1);
        console.log(2);
        // resolve({value:true});
        reject();
      }, 3000)

    }).then((response) => {
      console.log('response', response)
      console.log(3);
      console.log(4);
      console.log(5);
    }).catch((error) => {

      console.log('error', error)

    })
  }
}
