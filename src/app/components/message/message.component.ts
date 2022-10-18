import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() text?: string;
  @Input() messageDate?: Date;
  date?: string

  constructor() { }

  ngOnInit(): void {
    this.date = this.messageDate?.toLocaleTimeString('de-AT', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

}
