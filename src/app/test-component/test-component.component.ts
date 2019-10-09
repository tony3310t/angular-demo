import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  subject: string;
  verbs: string;
  object: string;
  sentence: string = '';
  collections: number[] = [];
  fibonacciLevel: number;
  isShowFibonacciCollections: boolean = false;

  //val1: string;
  rbValue: string = '';

  observable: Observable<string>;

  constructor() { }

  ngOnInit() {
  }



  onClickMe() {
    this.sentence = '';
    this.sentence += this.subject + ' ' + this.verbs + ' ' + this.object;
  }

  onClickFibonacciButton() {
    this.collections = [];
    if (this.fibonacciLevel < 3) {
      this.isShowFibonacciCollections = true;
      return;
    } else {
      this.isShowFibonacciCollections = false;
      this.collections.push(1);
      this.collections.push(1);

      for (let i = 2; i < this.fibonacciLevel; i++) {
        let result: number = 0;
        result = this.collections[i - 1] + this.collections[i - 2];
        this.collections.push(result);
      }
    }
  }

  /*onObservableClick() {//this.val1='Jane!';
    console.log('Start');
    this.observable = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next('Jane!');
        subscriber.complete();
      }, 5000);
    });

    this.observable.subscribe(value => {
      this.val1 = value;
    });

    console.log('End');
  }*/
}
