import { Component,Output,EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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
