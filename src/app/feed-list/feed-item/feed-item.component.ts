import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() feed;
  @Output() SendComment = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addComment(newComment: string, _id:string) {
    if (newComment) {
      this.SendComment.emit({
        comment : newComment,
        id : _id
      });
    }
  }

}
