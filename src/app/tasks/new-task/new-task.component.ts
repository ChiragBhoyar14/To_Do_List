import { Component,Output,EventEmitter, inject, Input } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

private TaskService = inject(TasksService);

  title: string = '';
  summary: string = '';
  dueDate: string = '';

@Output() Close = new EventEmitter<void>();
@Input({required: true}) userId!: string;

OnClose(){
      this.Close.emit();
  }

  Onsubmit()
  {
    this.TaskService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    },this.userId); 
     this.Close.emit();
  }
}
