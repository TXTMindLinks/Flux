import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';//sdsdsdsdsdsd
import { HomePage } from '../home/home';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  lat;
  long;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public googleMaps:GoogleMaps,public platform: Platform,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.loadMap();
  }
  goBackHome(){
    this.navCtrl.push(HomePage)
  }

  loadMap() {
  console.log("loading map");
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');
 // create LatLng object
 let pos: LatLng = new LatLng(33.900009, -118.162237);
 this.lat = 33.900009;
 this.long = -118.162237;
 let map: GoogleMap = this.googleMaps.create(element,{
    camera:{
      'target': pos,
      'zoom':18
    }
 });

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
      // create new marker
      let markerOptions: MarkerOptions = {
        position: pos,
        title: 'Ionic'
      };

      map.addMarker(markerOptions).then((marker: Marker) => {
          marker.showInfoWindow();
          console.log("marker")
           marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => { console.log('Marker clicked...'); });
        });
        }
 );

}
openMaps(){
    console.log("opening in maps")
    
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
