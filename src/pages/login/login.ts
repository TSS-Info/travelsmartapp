import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { NavController, AlertController } from 'ionic-angular';

// import { UserData } from '../../providers/user-data';

// import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { FrstTmOnBrdPage } from '../frst-tm-on-brd/frst-tm-on-brd';
import { Storage } from '@ionic/storage';
// import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  // login: UserOptions = { username: '', password: '' };
  submitted = false;
  usrDtls=[];
  usrNm;
  usrPswrd;
  flag=0;
  constructor(public navCtrl: NavController,public storage:Storage,private alertCtrl: AlertController) {
    this.storage.get('UserData').then((val) => {
      console.log('Details', val);
      this.usrDtls=val;
      console.log(this.usrDtls);
    });
   }

  onLogin() {
    // this.submitted = true;
    for(let i=0;i<this.usrDtls.length;i++){
      if(this.usrNm==this.usrDtls[i].email){
        this.flag=1;
        if(this.usrPswrd==this.usrDtls[i].password){
          this.navCtrl.push(FrstTmOnBrdPage);
        }
        else{
          let alert = this.alertCtrl.create({
            title: 'Traveller',
            subTitle: 'Password Incorrect!',
            buttons: ['Ok']
          });
          alert.present();
        }
      }
    }
    if(this.flag==0){
      let alert = this.alertCtrl.create({
        title: 'Traveller',
        subTitle: 'Username not found!',
        buttons: ['Ok']
      });
      alert.present();
    }

    // if (form.valid) {
    //   this.userData.login(this.login.username);
    // }
  }

  // onSignup() {
  //   this.navCtrl.push(SignupPage);
  // }
}
