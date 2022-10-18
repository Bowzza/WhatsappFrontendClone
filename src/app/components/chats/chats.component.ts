import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/model/Chat';
import { AllRounderService } from 'src/app/services/allRounder.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  animations: [
    trigger('stagger', [
      transition('* => *', [ 
        query(':enter', [
            style({ opacity: 0 }),
            stagger(30, [animate('0.2s', style({ opacity: 1 }))])
          ], { optional: true }
        )
      ])
    ])
  ]
})
export class ChatsComponent implements OnInit, OnDestroy {

  chats?: Array<Chat> = [
    {
      id: 1,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 2,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 3,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 4,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 5,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 6,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 7,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 8,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 9,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 10,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 11,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 12,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 13,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 14,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 15,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 16,
      name: "Mike",
      img: "https://picsum.photos/200/300",
      members: ['Hans', 'Gans', 'Jeff'],
      messages: [
        {
          id: 1,
          text: "Servus",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 17,
      name: "Jeff",
      img: "https://source.unsplash.com/random/?city,night",
      members: ['Sam', 'Gerald', 'Flo'],
      messages: [
        {
          id: 1,
          text: "Dere",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    },
    {
      id: 18,
      name: "John",
      img: "https://loremflickr.com/320/240",
      members: ['John', 'Andi', 'Markus'],
      messages: [
        {
          id: 1,
          text: "Uff",
          messageDate: new Date()
        }
      ],
      selectedChat: false
    }
  ];

  private filterChatListenerSub: Subscription;
  chatBeforeFilter: Array<Chat> = this.chats;

  constructor(private allRounderService: AllRounderService) { }

  ngOnInit(): void {
    this.filterChatListenerSub = this.allRounderService.getFilterChatListener().subscribe(text => {
      this.chatBeforeFilter = this.chats;
      if(text === '') return;
      this.chatBeforeFilter = this.chatBeforeFilter.filter(chat => chat.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()));
    });
  }

  switchChat(chat: Chat) {
    chat.selectedChat = true;
    this.chats.forEach(item => {
      if(chat.id !== item.id) item.selectedChat = false;
    })
    this.allRounderService.emitChat(chat);
  }

  ngOnDestroy(): void {
    this.filterChatListenerSub.unsubscribe();
  }

}
