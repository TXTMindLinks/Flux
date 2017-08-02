import { Component } from '@angular/core';
import { FeaturesPage } from '../features/features'
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mercadito',
  templateUrl: 'mercadito.html',
})
export class MercaditoPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercaditoPage');
  }
  goToFeatures(){
    this.navCtrl.push(FeaturesPage)
  }


}
