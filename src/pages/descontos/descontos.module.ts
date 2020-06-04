import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescontosPage } from './descontos';

@NgModule({
  declarations: [
    DescontosPage,
  ],
  imports: [
    IonicPageModule.forChild(DescontosPage),
  ],
})
export class DescontosPageModule {}
