import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textToSearch: string = ''
  response: any

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log('Buscando ' + this.textToSearch + '...')
    this.utils.mlSearch(this.textToSearch).subscribe(
      data => {
        this.response = data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

}
