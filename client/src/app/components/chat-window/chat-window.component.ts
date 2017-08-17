import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  showmessages: string;
  inputMessage: string;
  allmessages: any;
  sessionId: string;

  constructor(private Chat: ChatService,
    private route: ActivatedRoute,
    @Inject('data') private data ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      // this.initEditor();
    });
    this.allmessages = [];
    this.Chat.init(this.allmessages, this.sessionId);
  }

  sendMessage() {
    console.log("current showmessages: "+this.showmessages);
    console.log("this.inputMessage:"+this.inputMessage);
    // this.showmessages = this.showmessages + this.inputMessage;
    this.allmessages.push({user:'myself',info:this.inputMessage});
    this.Chat.sendMessage(this.inputMessage);
  }
}
