import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var TimelineMax: any;
declare var TweenLite: any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  timeline: any;
  scrollMagic: any;

  @ViewChild("header", {read: null, static: true}) header: ElementRef;
  @ViewChild("popularProducts", {read: null, static: true}) popularProducts: ElementRef;

  @ViewChild("services", {read: null, static: true}) services: ElementRef;

  public arr: any = [1,2,3,4];
  constructor() { }

  images: any = ['p1.jpg', 'p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg','p9.jpg']

  getRandomPicture()
  {
    return '../../assets/img/' + this.images[Math.floor(Math.random()*this.images.length)];
  }

  ngOnInit() {
    this.timeline = new TimelineMax();
    let ctrl = ScrollMagic.Controller();

    /*this.timeline.fromTo(this.header.nativeElement, 2, {top:0}, {top:20})
      .fromTo(this.popularProducts.nativeElement, 2, {top:0, opacity:0}, {top:10, opacity:1});
    

    let scene = ScrollMagic.Scene({
      triggerElement: this.popularProducts.nativeElement.classList[0],
      duration: 1000,
      triggerHook: 0
    })
    .addIndicators()
    .setPin(this.popularProducts.nativeElement)
    .addTo(ctrl);*/

    window.addEventListener('scroll', event => {
      console.log(window.scrollY + ' // ' + (this.popularProducts.nativeElement.scrollHeight));
    });
    
  }
}
