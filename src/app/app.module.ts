import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EditTasksComponent } from './components/tasks/Create/edit-tasks/edit-tasks.component';  
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptors/http-header.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    EditTasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpHeaderInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
