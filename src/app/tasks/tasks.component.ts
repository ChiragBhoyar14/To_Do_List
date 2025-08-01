import { Component,Input, inject} from '@angular/core';
import { TaskComponent } from './task/task.component';
import{dummyTasks} from '../dummy-tasks';
import{TasksService} from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import{ NewTask, Task } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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

  OnCompleted(id: string) {
    return this.TaskService.removeTask(id);
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
