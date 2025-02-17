import { Component } from '@angular/core';
import { GenericService } from '../../generic.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: any[] = [];

  constructor(private gs: GenericService) {}

  ngOnInit() {
    // this.gs.getTasks().subscribe((tasks) => {
    //   this.tasks = tasks;
    // });
  }

  onDeleteTask(id: number) {
  }

  onEditTask(task: any) {
    // You can pass the task to the task form for editing
  }
}
