import { Component,Input, inject} from '@angular/core';

import{dummyTasks} from '../dummy-tasks';
import{TasksService} from './tasks.service';
import{ NewTask, Task } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {

  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddNewTask = false;
  
   Tasks: Task[] = dummyTasks;

// constructor(private TaskService:TasksService){}   this is the old way of injecting services in Angular
// Now we use inject function to inject services in Angular components
private TaskService = inject(TasksService);

  get UserTasks(){
     return this.TaskService.getUserTasks(this.userId!);
  }

OnStartAddTask() {
     this.isAddNewTask = true; 
  }

  OnCancleAddTask() {
     this.isAddNewTask = false; 
  }

  OnAddTask(NewTask: NewTask)
  {
    this.TaskService.addTask(NewTask, this.userId!);
      this.isAddNewTask = false;
  }
}
