import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product'
import { OptionsPage } from '../options/options'


@Component({
  selector: 'page-stands',
  templateUrl: 'stands.html',
  
})
export class StandsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandsPage');
  }
  goToStands(){
    this.navCtrl.push(ProductPage);
  }
  goHome(){
     this.navCtrl.push(OptionsPage);
  }
  
}
