import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public ps: ProjectService) { }

  ngOnInit(): void {
    this.ps.renderAll();
  }

  hover = [];

  hoverTrue(i: number) {
    this.hover[i] = true;
  }

  hoverFalse(i: number) {
    this.hover[i] = false;
  }

}
