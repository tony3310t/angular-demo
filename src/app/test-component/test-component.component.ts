import { Component, OnInit } from '@angular/core';

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
}
