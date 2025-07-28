import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 dummy_user = DUMMY_USERS;
 selectedUserId?: string ;

  get selectedUser() {
    return this.dummy_user.find(user=>user.id==this.selectedUserId);
  }

  onSelectedUse(id: string) {
    this.selectedUserId = id;
    console.log('Selected User ID:', this.selectedUserId);
  }

}
