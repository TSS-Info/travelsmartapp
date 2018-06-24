import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs-page/tabs-page';

/**
 * Generated class for the FrstTmOnBrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frst-tm-on-brd',
  templateUrl: 'frst-tm-on-brd.html',
})
export class FrstTmOnBrdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrstTmOnBrdPage');
  }
  phoneCnfrm(){
    this.navCtrl.push(TabsPage);
  }

}
