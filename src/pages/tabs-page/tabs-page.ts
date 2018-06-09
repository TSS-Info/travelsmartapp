import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

// import { AboutPage } from '../about/about';
// import { MapPage } from '../map/map';
// import { SchedulePage } from '../schedule/schedule';
// import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = HomePage;
  tab4Root: any = HomePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
