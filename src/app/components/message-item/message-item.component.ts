import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent implements OnInit {
  
  @Input('message')
  public message: Message;
  
  public isSentByBot: boolean = true;

  constructor() {}

  ngOnInit() {
    console.log(this.message);
  }
}
