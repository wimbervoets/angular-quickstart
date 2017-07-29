import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  persons: any[] = [
    { "name"  :   "Eden Hazard"},
    { "name"  :   "Vincent Kompany"},
    { "name"  :   "Thibaut Courtois"},
    { "name"  :   "Toby Alderweireld"},
    { "name"  :   "Jan Vertonghen"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
