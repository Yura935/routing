import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-tasklist',
  templateUrl: './works-tasklist.component.html',
  styleUrls: ['./works-tasklist.component.scss']
})
export class WorksTasklistComponent implements OnInit {

  constructor() { }
  name: string;
  hiden = false;
  changeIndex: number;
  title = 'hw12';
  taskName: string;
  
  getLists: Array<any> = [{
    name: 'HTML5',
    status: true,
    process: 'Done'
  },
  {
    name: 'Angular',
    status: false,
    process: 'In PROGRESS'

  },
  {
    name: 'JavaScript',
    status: false,
    process: 'In PROGRESS'
  }
  ];
  ngOnInit(): void {
  }

  check(b: boolean, i: number): void {
    if (b) {
      this.getLists[i].status = false;
      this.getLists[i].process = 'In PROGRESS';
    }
    else {
      this.getLists[i].status = true;
      this.getLists[i].process = 'Done';
    }
  }

  delete(index: number): void {
    this.getLists.splice(index, 1);
  }

  edit(index: number) {
    this.name = this.getLists[index].name;
    this.hiden = true;
    this.changeIndex = index;
  }
  
  save(): void {
    this.getLists[this.changeIndex].name = this.name;
    this.name = '';
    this.hiden = false;
  }
  addTask(): void {
    if (this.taskName.length !== 0) {
      const newTask = {
        name: this.taskName,
        status: false,
        process: 'In PROGRESS'
      }
      this.getLists.push(newTask)
      this.taskName = '';
    }
  }
}
