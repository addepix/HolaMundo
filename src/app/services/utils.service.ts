import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  mlSearch(value: string): Observable<any> {
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=' + value)
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get('https://api.mercadolibre.com/items/' + productId)
  }

  getProductDescription(productId: string): Observable<any> {
    return this.http.get('https://api.mercadolibre.com/items/' + productId + '/description')
  }
}
