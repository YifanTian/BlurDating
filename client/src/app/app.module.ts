import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent } from './app.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

import { DataService } from './services/data.service';
// import { ChatroomsService } from './services/chatrooms.service';

// routing import 
import { routing } from './app.routes';

// service import 
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProblemsComponent,
    PeoplesComponent,
    NavbarComponent,
    PeopleDetailComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    routing
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
