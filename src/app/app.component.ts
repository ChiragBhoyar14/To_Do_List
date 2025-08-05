import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
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
  }

}
