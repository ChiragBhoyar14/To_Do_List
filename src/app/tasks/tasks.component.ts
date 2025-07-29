import { Component,Input, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import{dummyTasks} from '../dummy-tasks';

interface Task {
  id:string,
  userId: string,
    title: string,
    summary :string,
    dueDate:string
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) name?: string;
  @Input({required: true}) userId?: string;

  Tasks: Task[] = dummyTasks;

  get UserTasks(){

    return this.Tasks.filter(task => task.userId===this.userId);
  
  }
}
