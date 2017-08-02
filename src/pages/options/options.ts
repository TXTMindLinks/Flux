import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { StandsPage } from '../stands/stands'


@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController) {
  }

  // getItems(){

  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }
  goToStands(){
    this.navCtrl.push(StandsPage)
  }

  


}
