import { Component } from '@angular/core';
import { GenericService } from '../../../../generic.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-tasks',
  standalone: false,
  templateUrl: './edit-tasks.component.html',
  styleUrl: './edit-tasks.component.scss'
})
export class EditTasksComponent {
  task: any = { id: 0, title: '', description: '', completed: false };

  constructor(
   private gs: GenericService,
    private route: ActivatedRoute,
   private router:Router
  ) {}

  ngOnInit() {
    // Check if we're editing an existing task
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      // const existingTask = this.gs.getTasks().find(task => task.id.toString() === taskId);
      // if (existingTask) {
      //   this.task = { ...existingTask };
      // }
    }
  }

  onSubmit() {
    if (this.task.id === 0) {
      this.task.id = Date.now(); // Generate a new ID
      this.gs.addTask();
    } else {
      this.gs.editTask();
    }
    this.router.navigate(['/']);
  }
}
