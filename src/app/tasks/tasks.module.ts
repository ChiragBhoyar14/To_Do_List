import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
    declarations: [TaskComponent,NewTaskComponent,TasksComponent,CardComponent],
    imports: [FormsModule,BrowserModule],
    exports: [TasksComponent,CardComponent],
})
export class TasksModule {}