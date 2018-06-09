import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConformationPage } from './conformation';

@NgModule({
  declarations: [
    ConformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConformationPage),
  ],
})
export class ConformationPageModule {}
