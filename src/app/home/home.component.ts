import { Component, OnInit } from '@angular/core';
import '../../assets/js/demo.js';

declare var start: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    new start();
  }
}
