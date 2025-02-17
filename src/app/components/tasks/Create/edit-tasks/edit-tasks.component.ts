import { Component } from '@angular/core';
import { GenericService } from '../../../../generic.service';
import { ActivatedRoute,Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-edit-tasks',
  standalone: false,
  templateUrl: './edit-tasks.component.html',
  styleUrl: './edit-tasks.component.scss'
})
export class EditTasksComponent {
  task: any ={id:0} ;

  constructor(
   private gs: GenericService,
    private route: ActivatedRoute,
   private router:Router
  ) {}

  ngOnInit() {
    // Check if we're editing an existing task
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      const existingTask = this.gs.get(`https://localhost:44305/api/Task/${taskId}`).subscribe((res:any)=>{
        this.task=res.value
      })

    }
  }

  onSubmit() {
    if (this.task.id === 0) {
      this.gs.post('https://localhost:44305/api/Task',this.task).subscribe(()=>{this.router.navigate(['/tasks']);})
    } else {
      this.gs.put(`https://localhost:44305/api/Task/${this.task.id}`,this.task).subscribe(()=>{this.router.navigate(['/tasks']);})
    }
  }
}
