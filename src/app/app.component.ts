import { Component } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Observables';

  data: any[] = [];

  //1.Create an Observable
  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    // setTimeout(() => { observer.error(new Error('Something went wrong.Please try again later!')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  });

  GetAsyncData() {

    //Observer
    //next,error,complete
    this.myObservable.subscribe((val: any) => {
      this.data.push(val);
    },
      (err) => {
        alert(err.message)
      },
    ()=>{
      alert('All the data is streamed!')
    });
  }
}
