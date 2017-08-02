import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { MercaditoPage } from '../mercadito/mercadito';

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
      'El Mercado de Los Angeles',
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
  
  goToOptions(item) {
    if (item === "El Mercado de Los Angeles"){
      this.navCtrl.push(MercaditoPage);
    }else{
      this.navCtrl.push(OptionsPage);
    }
    // this.navCtrl.push(OptionsPage);
  }
}

  

