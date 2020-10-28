import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  banners: any[] = ['banner_1.jpg','banner_2.jpg'];
  brands: any[] = ['ROLAND', 'BOSS', 'FREEMAN', 'REMO', 'IBAÑEZ', 'NATIVA'];
  products: any[]=[
    { Description: 'Ukelele acústico tenor Ibanez UEWT5 OPN', Price: 399, Img: 'product_1.jpg' },
        { Description: 'Guitarra eléctrica Ibanez GRG7221 - 7 cuerdas', Price: 959, Img: 'product_2.jpg' },
        { Description: 'Guitarra clásica Vizcaya ARCG39 color sunburst', Price: 189, Img: 'product_3.jpg' },
        { Description: 'Bajo eléctrico Ibanez GSR205 - 5 cuerdas', Price: 1099, Img: 'product_4.jpg' },
    { Description: 'Set de batería Tama Imperialstar', Price: 2159, Img: 'product_5.jpg' },
        { Description: 'Sintetizador A/D Roland XPS-10', Price: 2159, Img: 'product_6.jpg' },
        { Description: 'Trompeta Baldassare 6418S silver plata', Price: 559, Img: 'product_7.jpg' },
        { Description: 'Batería electrónica Roland portátil TD4KP', Price: 2990, Img: 'product_8.jpg' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
