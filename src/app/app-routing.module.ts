import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { EditTasksComponent } from './components/tasks/Create/edit-tasks/edit-tasks.component';

const routes: Routes = [
  {
  path:'',
  component:AppComponent,
  children:[
    { path:'',
      component:LoginComponent
    },
    {
      path:'tasks',
      component:TasksComponent
    },
    { path: 'create', component: EditTasksComponent },
    { path: 'edit/:id', component: EditTasksComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
