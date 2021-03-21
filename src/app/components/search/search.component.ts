import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[] = []
  productId: string = ''

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
  }

  buttonClicked(textToSearch: string) {
    console.log('Buscando ' + textToSearch + '...')
    this.productId = ''
    this.utils.mlSearch(textToSearch).subscribe(
      data => {
        console.log(data)

        this.products = []
        for (let item of data.results) {
          let product = new Product()
          product.id = item.id
          product.title = item.title
          product.image = item.thumbnail
          product.price = item.price
          this.products.push(product)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  onProductSelection(productId: string) {
    console.log('Passed: ' + productId)
    this.productId = productId
  }
}
