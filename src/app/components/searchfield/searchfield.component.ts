import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllRounderService } from 'src/app/services/allRounder.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {

  constructor(private allRounderService: AllRounderService) { }

  ngOnInit(): void {
  }

  filterChat(event: any): void {
    const text = event.target.value;
    this.allRounderService.emitFilterChatText(text)
  }

}
