import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';//sdsdsdsdsdsd
import { OptionsPage } from '../options/options'
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FeaturesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {

  lat;
  long;
  display; 
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public googleMaps:GoogleMaps,public platform: Platform,public geolocation: Geolocation) {
    this.display = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }
  showTimes(){
      if (this.display == true){
        this.display = false;
      }else{
        this.display=true;
      }
  }
      goHome(){
          this.navCtrl.push(OptionsPage);
  }

    openMaps(){

    console.log("opening in maps")
      
      let pos: LatLng = new LatLng(34.037048, -118.193832);
      this.lat = 34.037048;
      this.long = -118.193832;


      this.geolocation.getCurrentPosition().then((position) => {
        // ios
        if (this.platform.is('ios')) {
          console.log("ios2");
          // window.open('maps://?q=' + position.coords.latitude + ',' +position.coords.longitude + '_system')
           window.open('maps://?q=' + "amigos" + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + this.lat + ',' + this.long, '_system');
        };
        // android
        if (this.platform.is('android')) {
          window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + this.lat + ',' + this.long + '(' + "amigos" + ')', '_system');
        };
      }).catch((err) => {
          let alert = this.alertCtrl.create({
              title: 'Error on GPS',
              subTitle: err.PositionError,
              buttons: ['OK']
          });
          alert.present();
      });


}
}
