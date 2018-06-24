import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { ConformationPage } from '../conformation/conformation';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {
    this.storage.remove('UserData')
  }
  usrDta = [];
  email; fstNm; lstNm; pswrd; cnfrmpswrd; bDate; mnth; year;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    if (this.email == '' || this.email == undefined) {
      let alert = this.alertCtrl.create({
        title: 'Traveller',
        subTitle: 'Please enter your E-mail Id!',
        buttons: ['Ok']
      });
      alert.present();
    }
    else if (this.pswrd == '' || this.pswrd == undefined) {
      let alert = this.alertCtrl.create({
        title: 'Traveller',
        subTitle: 'Please enter your password!',
        buttons: ['Ok']
      });
      alert.present();
    }
    else if (this.cnfrmpswrd == '' || this.cnfrmpswrd == undefined) {
      let alert = this.alertCtrl.create({
        title: 'Traveller',
        subTitle: 'Please Re-enter your password!',
        buttons: ['Ok']
      });
      alert.present();
    }
  

    else{ 
      if (this.cnfrmpswrd != this.pswrd) {
        let alert = this.alertCtrl.create({
          title: 'Traveller',
          subTitle: 'Passwords are not matched!',
          buttons: ['Ok']
        });
        alert.present();
      }
      else{
        let usrDta = {
          'email': this.email,
          'firstName': this.fstNm,
          'lastName': this.lstNm,
          'password': this.pswrd,
          'confrimPswrd': this.cnfrmpswrd,
          'birthDate': this.bDate + '-' + this.mnth + '-' + this.year
        }
        this.usrDta.push(usrDta);
        console.log(this.usrDta);
        this.storage.set('UserData', this.usrDta);
    
        this.navCtrl.push(ConformationPage);
      }
     
    }
   
  }
}
