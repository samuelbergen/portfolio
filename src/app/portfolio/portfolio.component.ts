import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hover = [];

  hoverTrue(i) {
    this.hover[i] = true;
  }

  hoverFalse(i) {
    this.hover[i] = false;
  }

}
