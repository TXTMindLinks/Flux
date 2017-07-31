import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsPage } from '../options/options'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
     }
  items;

  initializeItems() {
    this.items = [
      'Alameda Swap Meet',
      'Bonitos Swap Meet',
      'Mini Swap Meet',
      'Paramount Swap Meet',
      'Westlake Swap Meet',
    
    ];

  
  }
    

  getItems(ev) {

    this.initializeItems();

    
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if (val == ""){
      this.items= [];
    }
  }
  
  goToOptions() {
    this.navCtrl.push(OptionsPage);
  }
}

  

