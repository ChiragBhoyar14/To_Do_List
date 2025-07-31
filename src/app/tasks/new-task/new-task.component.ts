import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  title: string = '';
  summary: string = '';
  dueDate: string = '';

@Output() AddTask = new EventEmitter<NewTask>();
@Output() CancleTask = new EventEmitter<void>();
  
OnCancle(){
      this.CancleTask.emit();
  }

  OnAddTask()
  {
    this.AddTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate 
    })
  }
}
