import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chat?: Chat;

  constructor() { }

  ngOnInit(): void {
    
  }

  showAlert(): void {
    alert('this');
  }

}
