import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TasksModule } from "./tasks/tasks.module";




@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
     imports: [ FormsModule, BrowserModule, TasksModule],
    bootstrap: [AppComponent]

})

export class AppModule { };