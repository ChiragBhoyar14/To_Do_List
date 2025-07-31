import{dummyTasks} from '../dummy-tasks';
import { NewTask, Task } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class TasksService {

 Tasks: Task[] = dummyTasks;

getUserTasks(userId: string) {
  return this.Tasks.filter(task => task.userId===userId);
}

addTask(NewTask: NewTask, userId: string) {
      this.Tasks.unshift({
        id:Math.random().toString(),
        userId: userId!,
        title:NewTask.title,
        summary: NewTask.summary,
        dueDate: NewTask.dueDate

      })

  }

removeTask(id: string) {
    this.Tasks= this.Tasks.filter(task => task.id !== id );
    }
}