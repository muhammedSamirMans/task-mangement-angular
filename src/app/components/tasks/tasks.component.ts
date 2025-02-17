import { Component } from '@angular/core';
import { GenericService } from '../../generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: any = [];

  constructor(private gs: GenericService,private router:Router) {}

  ngOnInit() {
   this.getData()
  }

  onDeleteTask(id: number) {
    this.gs.delete(`https://localhost:44305/api/Task/${id}`).subscribe(()=>{
      this.getData()
    })
  }

  onEditTask(task: any) {
    debugger
    let url =`/edit/${task?.id}`;
    this.router.navigate([url])
  }

  getData(){
    this.gs.get('https://localhost:44305/api/Task?PageNumber=1&PageSize=50').subscribe((tasks:any) => {
      this.tasks = tasks?.value.items;
    });
  }
}
