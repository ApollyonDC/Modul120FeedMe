import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedMePageRoutingModule } from './feed-me-routing.module';

import { FeedMePage } from './feed-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedMePageRoutingModule
  ],
  declarations: [FeedMePage]
})
export class FeedMePageModule {}
