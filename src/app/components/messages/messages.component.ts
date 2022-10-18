import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/model/Message';
import { AllRounderService } from 'src/app/services/allRounder.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  messages: Array<Message> = [];
  private messageListenerSub: Subscription;
  private chatListenerSub: Subscription;

  constructor(private allRounderService: AllRounderService) { }

  ngOnInit(): void {
    this.messageListenerSub = this.allRounderService.getMessageListener().subscribe(message => this.messages.push(message));
    this.chatListenerSub = this.allRounderService.getChatListener().subscribe(chat => {
      this.messages = chat.messages;
      if(this.messages.length !== 0) return;
      this.messages = [];
    });
  }

  ngOnDestroy(): void {
    this.messageListenerSub.unsubscribe();
    this.chatListenerSub.unsubscribe();
  }
}
