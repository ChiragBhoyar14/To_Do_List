import { Component,Input, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import{dummyTasks} from '../dummy-tasks';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import{ NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  @Input({required: true}) name?: string;
  @Input({required: true}) userId?: string;
  isAddNewTask = false;

  Tasks: Task[] = dummyTasks;

  get UserTasks(){

    return this.Tasks.filter(task => task.userId===this.userId);
  
  }

  OnCompleted(id: string) {
  this.Tasks= this.Tasks.filter(task => task.id !== id );
  }

OnStartAddTask() {
     this.isAddNewTask = true; 
  }

  OnCancleAddTask() {
     this.isAddNewTask = false; 
  }

  OnAddTask(NewTask: NewTask)
  {
        this.Tasks.unshift({
        id:Math.random().toString(),
        userId: this.userId!,
        title:NewTask.title,
        summary: NewTask.summary,
        dueDate: NewTask.dueDate

      })

      this.isAddNewTask = false;
  }
}
