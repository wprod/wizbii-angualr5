import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../shared/feed/feed.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})

export class FeedListComponent implements OnInit {
  feeds: any;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getAll().subscribe((data:any) => {
      this.feeds = _.filter(data.feed_items.feed_items, { type: "publication" });
    })
  }

  addComment(event) {
    this.feeds[_.findIndex(this.feeds, {id: event.id})]
      .publication
      .comments.push({
        name: "CurrentUser",
        userId: "userId123",
        comment: event.comment
      });
    this.feedService.postComment(event.comment, event.id, "CurrentUser");
  }
}
