import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

import { ChatService } from './services/chat.service';

import { DataService } from './services/data.service';
// import { ChatroomsService } from './services/chatrooms.service';

// routing import 
import { routing } from './app.routes';

// service import 
import { AuthService } from './services/auth.service';
// <<<<<<< HEAD
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
// =======
import { ToastrService, CustomOption } from './services/toastr.service';
// >>>>>>> d735769e0d332e04643a913b6854f769a93b3b9b

@NgModule({
  declarations: [
    AppComponent,
    ProblemsComponent,
    PeoplesComponent,
    NavbarComponent,
    PeopleDetailComponent,
    ChatWindowComponent,
    ProfileComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    routing
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    },
    AuthService,
// <<<<<<< HEAD
    ChatService,
// =======
    ToastrService,
    { provide: ToastOptions, useClass: CustomOption },
// >>>>>>> d735769e0d332e04643a913b6854f769a93b3b9b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
