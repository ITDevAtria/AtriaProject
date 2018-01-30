import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('div1') div1:ElementRef;
  divClass:string='tumpuk1';
  constructor(public navCtrl: NavController) {

  }
  divTap(){
    //console.log(this.divClass)
    if (this.divClass=='tumpuk1') {
      //console.log('change')
      this.divClass='tumpuk2'
    } else if (this.divClass=='tumpuk2') {
      //console.log('change')
      this.divClass='tumpuk3'
    } else if (this.divClass=='tumpuk3') {
      //console.log('change')
      this.divClass='tumpuk1'
    }
  }
  download(event){
    //console.log(event)
    event.stopPropagation();
    alert('download')
  }
  swipe(event) {
    console.log('swipe ' + event.direction)
    if(event.direction == 2) {
    }
    if(event.direction == 4) {
    }
    if(event.direction == 8) {
      if (this.divClass=='tumpuk3') {
        //console.log('change')
        this.divClass='tumpuk2'
      } else if (this.divClass=='tumpuk2') {
        //console.log('change')
        this.divClass='tumpuk1'
      }
    }
    if(event.direction == 16) {
      if (this.divClass=='tumpuk1') {
        //console.log('change')
        this.divClass='tumpuk2'
      } else if (this.divClass=='tumpuk2') {
        //console.log('change')
        this.divClass='tumpuk3'
      }
    }
  }
  doRefresh(e){
    console.log(e)
  }
  pan(e){
    //console.log(e)
  }
}
