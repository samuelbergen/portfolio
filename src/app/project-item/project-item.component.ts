import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() i:number = 0;

  constructor(public ps: ProjectService) { }
  
  hover = [];

  ngOnInit(): void {

  }

  hoverTrue(i:number) {
    this.hover[i] = true;
  }

  hoverFalse(i:number) {
    this.hover[i] = false;
  }

}
