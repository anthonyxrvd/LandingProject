import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = true;
  @Input() banners:any[];
  //banners: any[] = ['banner_1.jpg','banner_2.jpg'];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit() {
  }

}
