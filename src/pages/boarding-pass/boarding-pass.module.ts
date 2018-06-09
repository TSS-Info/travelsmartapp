import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardingPassPage } from './boarding-pass';

@NgModule({
  declarations: [
    BoardingPassPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardingPassPage),
  ],
})
export class BoardingPassPageModule {}
