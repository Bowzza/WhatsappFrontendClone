import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MessageComponent } from './components/message/message.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessagefieldComponent } from './components/messagefield/messagefield.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatsComponent } from './components/chats/chats.component';
import { LeftsideComponent } from './components/leftside/leftside.component';
import { RightsideComponent } from './components/rightside/rightside.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MessageComponent,
    ChatComponent,
    MessagefieldComponent,
    SearchfieldComponent,
    MessagesComponent,
    ChatsComponent,
    LeftsideComponent,
    RightsideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
