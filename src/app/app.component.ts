import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Schedule', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'calendar' },
    { title: 'Speakers', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 1, icon: 'contacts' },
    { title: 'Map', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 2, icon: 'map' },
    { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 3, icon: 'information-circle' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: HomePage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: HomePage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: HomePage, icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: HomePage, icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: HomePage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    // public storage: Storage,
    public splashScreen: SplashScreen
  ) {
    this.rootPage = SignupPage;
    // Check if the user has already seen the tutorial
    // this.storage.get('hasSeenTutorial')
    //   .then((hasSeenTutorial) => {
    //     if (hasSeenTutorial) {
         
    //     } else {
    //       this.rootPage = TabsPage;
    //     }
    //     this.platformReady()
    //   });

    // load the conference data
    // confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.enableMenu(hasLoggedIn === true);
    // });
    this.enableMenu(true);

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    // if (page.logsOut === true) {
    //   // Give the menu time to close before changing to logged out
    //   this.userData.logout();
    // }
  }

  // openTutorial() {
  //   this.nav.setRoot(TutorialPage);
  // }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
