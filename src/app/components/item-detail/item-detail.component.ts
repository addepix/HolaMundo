import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UtilsService } from '../../services/utils.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  productId: string = ''

  product: Product = new Product()

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    console.log('Detail: ' + this.productId)

    this.utils.getProduct(this.productId).subscribe(
      data => {
        console.log(data)
        this.product.id = data.id
        this.product.title = data.title
        this.product.thumbnail = data.secure_thumbnail
        this.product.image = data.pictures[0].url
        this.product.price = data.price
        this.utils.getProductDescription(this.productId).subscribe(
          data => {
            console.log(data)
            this.product.description = data.plain_text
          },
          error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error)
      }
    )
  }

}
