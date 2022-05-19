import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects = [
    {
      'name': 'notepad',
      'description': 'Simple notepad app',
      'category': 'js'
    },
    {
      'name': 'deliveryapp',
      'description': 'Food delivery app inspired by Lieferando',
      'category': 'js'
    },
    {
      'name': 'pokedex',
      'description': 'Pokedex with Data from the Pokedex API',
      'category': 'js'
    },
    {
      'name': 'kanban',
      'description': 'Simple Kanban-Board',
      'category': 'js'
    },
    {
      'name': 'elpolloloco',
      'description': 'Funny jump and run game',
      'category': 'js'
    },
    {
      'name': 'portfolio',
      'description': 'My personal homepage',
      'category': 'angular'
    }
  ];

  projectsFiltered = this.projects;

  renderAll() {
    this.projectsFiltered = this.projects;
    this.addActive('btn-all');
    this.removeActive('btn-js');
    this.removeActive('btn-angular');
  }

  renderJS() {
    this.projectsFiltered = this.projects.filter((p) => p.category == 'js');
    this.addActive('btn-js');
    this.removeActive('btn-all');
    this.removeActive('btn-angular');
  }

  renderAngular() {
    this.projectsFiltered = this.projects.filter((p) => p.category == 'angular');
    this.addActive('btn-angular');
    this.removeActive('btn-all');
    this.removeActive('btn-js');
  }

  addActive(id:string) {
    document.getElementById(id).classList.add('active');
  }

  removeActive(id:string) {
    document.getElementById(id).classList.remove('active');
  }

}
