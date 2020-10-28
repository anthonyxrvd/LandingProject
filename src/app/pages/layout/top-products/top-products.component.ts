import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {
@Input() products: any[];
  constructor() { }

  ngOnInit() {
  }

}
