import { Component, OnInit } from '@angular/core';

import { Observable, fromEvent, from, timer, interval, of } from 'rxjs';

import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  // 1--
  private observable = Observable.create(observer => {
    observer.next('HOLA');
    observer.next('A');
    observer.next('TODOS');
    observer.next('EN');
    observer.next('EL');
    observer.next('CURSO');
    observer.next('DE');
    observer.next('CEDESISTEMAS');
  });
  observableText: string;
  observableArray: string[] = [];

  // 6-Observable static
  private observableStatic = of('cedesistemas', ['andres', 'londoño'], 100, true, { name: 'juan' });
  observableStaticArray: any[] = [];


  constructor() { }

  ngOnInit() {
    // 1--
    this.observable.subscribe(msg => {
      this.observableText = msg;
      this.observableArray.push(msg);
    });

    this.observableStatic.subscribe(val => this.observableStaticArray.push(val));



  }
  // 2--
  observableClickArray: string[] = [];
  callObservableClick() {
    let observableClick = fromEvent(document.body, 'click');
    observableClick.subscribe(click => this.observableClickArray.push("clicked"));
  }
  // 3--
  observablePromiseString: string;
  callObservablePromise() {
    from(this.MyPromise1()).subscribe((data: string) => {
      this.observablePromiseString = data;
    });
  }
  MyPromise1(): any {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hola despues de 5000 ms");
      }, 5000);
    });
  }

  // 4-Observable Timer
  observableTimerArray: string[] = [];
  callObservableTimer() {
    let tm = timer(4000);
    tm.subscribe(res => this.observableTimerArray.push("Hola despues de 4000 ms"));
  }

  // 5- Observable interval
  observableIntervalArray: string[] = [];
  observableIntervalstring: string;
  callObservableInterval() {
    let int = interval(1000);
    int.subscribe(res => {
      this.observableIntervalstring = new Date().toString();
      this.observableIntervalArray.push(res.toString());
    });
  }
  // 7-Observable Map 
  observableMapArray: string[] = [];
  callObservableMap() {
    let observableMapNumbers = from([3, 30, 300, 3000]);
    observableMapNumbers
      .pipe(map(n => n * 2))
      .subscribe(res => { this.observableMapArray.push(res.toString()) });
  }

  // 8-Observable/Filter
  private students= of('andres','juan', 'pedro', 'alicia', 'maria');
  observableString: string;
  callObservableFilter(){
    this.students
    .pipe(filter(e=> e === 'pedro'))
    .subscribe(res => { this.observableString=res }); 
  }

}
