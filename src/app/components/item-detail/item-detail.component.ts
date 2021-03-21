import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  productId: string = ''

  constructor() { }

  ngOnInit(): void {
    console.log('Detail: ' + this.productId)
  }

}
