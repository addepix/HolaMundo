import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  products: Product[] = []

  @Output()
  productsChange = new EventEmitter<Product[]>()
  
  @Output()
  selectedProduct = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onClickDetail(productId: string) {
    console.log('Clicked on the selected item from the list: ' + productId)
    this.products = []
    this.productsChange.emit(this.products)
    this.selectedProduct.emit(productId)
  }
}
