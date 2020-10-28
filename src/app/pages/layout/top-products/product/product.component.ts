import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product: any;
  constructor() { }

  ngOnInit() {
  }
  formatNumber(n: number){
    var val = n.toFixed(2);
    var parts = val.toString().split(".");
    var num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");

    return num;
  }
}
