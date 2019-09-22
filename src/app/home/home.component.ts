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

  public arr: any = [1,2,3,4];
  constructor() { }

  ngOnInit() {
    this.timeline = new TimelineMax();
    let ctrl = ScrollMagic.Controller();

    this.timeline.add(
      TweenLite.fromTo(this.popularProducts.nativeElement, 2, {y: '-200px', opacity: 0}, {y: 0, opacity:1})
    );

    let scene = ScrollMagic.Scene({
      triggerElement: '.popularProducts',
      duration: 1000,
      triggerHook: 0
    })
     
      .addIndicators()
      .setPin('.popularProducts')
      .addTo(ctrl)

    console.log(this.popularProducts);
  }
}
