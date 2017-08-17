import { Injectable } from '@angular/core';

declare const io: any;
@Injectable()
export class ChatService {

  collaborationSocket: any;
  clientsInfo: Object = {};
  clientNum: number = 0;
  
  constructor() { }

  init(allmessages: any, sessionId: string):void {
    this.collaborationSocket = io(window.location.origin, {query: 'sessionId='+sessionId});
    
    // 'change' message handler
    this.collaborationSocket.on('message', function (data) {
      console.log("message received from server:"+data);
      // allmessages.messages = allmessages.messages + data;
      allmessages.push(data)
      allmessages.forEach(element => {
        console.log("user: "+element.user+" info: "+element.info);
      });
      console.log("new message to show " + allmessages);
     });
  }

  sendMessage(message): void {
    this.collaborationSocket.emit('message', message);
  }

}
