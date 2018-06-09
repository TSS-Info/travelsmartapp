import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BoardingPassPage } from '../boarding-pass/boarding-pass';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  viewBrdngPss(){
    this.modalCtrl.create(BoardingPassPage).present();
  }

}
