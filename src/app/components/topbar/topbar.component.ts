import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/model/Chat';
import { AllRounderService } from 'src/app/services/allRounder.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {

  chat?: Chat
  private chatListenerSub: Subscription

  constructor(private allRounderService: AllRounderService) { }

  ngOnInit(): void {
    this.chatListenerSub = this.allRounderService.getChatListener().subscribe(chat => this.chat = chat);
  }

  ngOnDestroy(): void {
    this.chatListenerSub.unsubscribe();
  }
}
