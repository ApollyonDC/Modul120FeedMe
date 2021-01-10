import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedMePage } from './feed-me.page';

const routes: Routes = [
  {
    path: '',
    component: FeedMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedMePageRoutingModule {}
