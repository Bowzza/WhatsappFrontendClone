import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Chat } from '../model/Chat';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class AllRounderService {

  private messageListener = new Subject<Message>();
  private chatListener = new Subject<Chat>();
  private filterChatListener = new Subject<string>();

  getMessageListener(): Observable<Message> {
    return this.messageListener.asObservable();
  }

  getChatListener(): Observable<Chat> {
    return this.chatListener.asObservable();
  }

  getFilterChatListener(): Observable<string> {
    return this.filterChatListener.asObservable();
  }

  emitMessage(message: Message) {
    this.messageListener.next(message);
  }

  emitChat(chat: Chat) {
    this.chatListener.next(chat);
  }

  emitFilterChatText(text: string) {
    this.filterChatListener.next(text);
  }
}
