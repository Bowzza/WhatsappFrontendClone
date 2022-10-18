import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/Message';
import { AllRounderService } from 'src/app/services/allRounder.service';

@Component({
  selector: 'app-messagefield',
  templateUrl: './messagefield.component.html',
  styleUrls: ['./messagefield.component.scss']
})
export class MessagefieldComponent implements OnInit {

  text?: string
  date?: Date

  constructor(private allRounderService: AllRounderService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if(!this.text) return;
    const message: Message = {
      text: this.text,
      messageDate: new Date()
    }
    this.allRounderService.emitMessage(message);
    this.text = '';
  }

}
