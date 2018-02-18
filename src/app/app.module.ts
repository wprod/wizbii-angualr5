import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeedService } from './shared/feed/feed.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedListComponent } from './feed-list/feed-list.component'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FeedItemComponent } from './feed-list/feed-item/feed-item.component';
import { FeedCommentComponent } from './feed-list/feed-item/feed-comment/feed-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedItemComponent,
    FeedCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
